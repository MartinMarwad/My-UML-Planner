// This file provides helpful functions for parsing the datastore.

// Import Course data
import COURSES from './courses';


// A Grade Object: https://www.uml.edu/catalog/undergraduate/policies/academic-policies/grading-policies.aspx
const GRADES = {
    "A+": { "Letter Grade": "A+", "Details": "Superior Work: Highest Quality", "Numerical Value": 4.0, },
    "A": { "Letter Grade": "A", "Details": "Superior Work: Highest Quality", "Numerical Value": 4.0, },
    "A-": { "Letter Grade": "A-", "Details": "High Honors Quality", "Numerical Value": 3.7, },
    "B+": { "Letter Grade": "B+", "Details": "High Quality", "Numerical Value": 3.3, },
    "B": { "Letter Grade": "B", "Details": "Basic Honors Quality", "Numerical Value": 3.0,},
    "B-": { "Letter Grade": "B-", "Details": "Below Honors Quality", "Numerical Value": 2.7,},
    "C+": { "Letter Grade": "C+", "Details": "Above Satisfactory Quality", "Numerical Value": 2.3,},
    "C": { "Letter Grade": "C", "Details": "Satisfactory", "Numerical Value": 2.0,},
    "C-": { "Letter Grade": "C-", "Details": "Below Satisfactory Quality", "Numerical Value": 1.7,},
    "D+": { "Letter Grade": "D+", "Details": "Above Minimum Passing", "Numerical Value": 1.3,},
    "D": { "Letter Grade": "D", "Details": "Minimum Passing", "Numerical Value": 1.0,},
    "D-": { "Letter Grade": "D-", "Details": "Minimum Passing", "Numerical Value": 0.7,}, // Does this exist?
    "F": { "Letter Grade": "F", "Details": "Failure", "Numerical Value": 0.0,},
    "FX": { "Letter Grade": "FX", "Details": "Failed due to Academic Misconduct (may not be replaced or deleted)", "Numerical Value": 0.0,},
    "AU": { "Letter Grade": "AU", "Details": "Audit", "Numerical Value": null,},
    "W": { "Letter Grade": "W", "Details": "Withdrawn", "Numerical Value": null,},
    "CR": { "Letter Grade": "I", "Details": "Credit Only", "Numerical Value": null,},
    "INC": { "Letter Grade": "INC", "Details": "Incomplete", "Numerical Value": null,},
    "X": { "Letter Grade": "X", "Details": "Administrative Withdrawal", "Numerical Value": null,},
    "NC": { "Letter Grade": "NC", "Details": "No Credit", "Numerical Value": null,},
    "P": { "Letter Grade": "P", "Details": "Satisfactory Grade C- or Above", "Numerical Value": null,},
    "S": { "Letter Grade": "S", "Details": "Satisfactory Grade C or Above", "Numerical Value": null,},
    "U": { "Letter Grade": "U", "Details": "Unsatisfactory Failed", "Numerical Value": null,},
    "T": { "Letter Grade": "T", "Details": "Transfer Credit", "Numerical Value": null,},
    "Y": { "Letter Grade": "Y", "Details": "University Withdrawal for Non-Academic Reasons", "Numerical Value": null,},
};    

// A Course Object
export class Course {
    constructor(course) {
        this.number = course;
        this.name = COURSES[course]['name'].replace(course+' ', "").replace(/\s*\(.*?\)/g, "");
        this.raw_name = COURSES[course]['name'];
        this.url = COURSES[course]['url'];
        this.id = COURSES[course]['id'];
        this.description = COURSES[course]['description'];
        this.requirements_text = COURSES[course]['requirements-text'];
        this.requirements = COURSES[course]['requirements'];
        this.grade = "C";
        this.status = "planned"; // planned, in-progress, completed

        // Set the credits of the course
        if (COURSES[course]['credits']['max'] === COURSES[course]['credits']['min']) {
            this.credits = parseInt(COURSES[course]['credits']['min']);
        } else {
            this.credits = 0; // There was a range of credits
        }
    }

    // Get the name of the course
    getName() {
        return this.name;
    }

    // Get the grade of the course
    getGrade() {
        return this.grade;
    }

    // Get the credits of the course
    getCredits() {
        return this.credits;
    }

    // Set the grade of the course
    setGrade(grade) {
        this.grade = grade;
    }

    // Set the credits of the course
    setCredits(credits) {
        this.credits = credits;
    }

    // Get the course as a JSON object
    toJSON() {
        return {
            "name": this.name,
            "raw_name": this.raw_name,
            "url": this.url,
            "id": this.id,
            "description": this.description,
            "requirements_text": this.requirements_text,
            "requirements": this.requirements,
            "grade": this.grade,
            "status": this.status
        }
    }

}

// A Semester Object
export class Semester {
    constructor(term, year) {
        this.term = term; // Fall, Spring, Summer, or Winter
        this.year = year;
        this.classes = [];
        this.GPA = 0;
        // this.classification = "Freshman"; // Freshman, Sophomore, Junior, Senior, or Graduate
    }

    // Get total credits of the semester
    getCredits() {
        let totalCredits = 0;
        
        // Loop through all the classes in the semester
        for (let i = 0; i < this.classes.length; i++) {
            const course = this.classes[i];
            totalCredits += parseInt(course.getCredits());
        }

        return totalCredits;
    }

    // Add a class to the semester
    addClass(course_string) {
        const course = new Course(course_string);
        this.classes.push(course);
    }

    // Calculate the GPA of the semester and return it
    getGPA() {
        let totalCredits = 0;
        let totalGradePoints = 0;

        // Loop through all the classes in the semester
        for (let i = 0; i < this.classes.length; i++) {
            const course = this.classes[i];
        
            // Get the grade and credits of the course
            const grade = GRADES[course.getGrade()]['Numerical Value'];
            const credits = course.getCredits()

            // If the grade is null, then the semester GPA cannot be calculated
            if (grade === null) {
                return null;
            }

            // Add the credits to the total credits
            totalCredits += credits;

            // Add the grade points to the total grade points
            totalGradePoints += grade * credits;
        }

        // Calculate the GPA
        this.GPA = totalGradePoints / totalCredits;

        // Return the GPA
        return this.GPA;
    }

    removeClass(course_string) {
        // loop through all the classes in the semester
        for (let i = 0; i < this.classes.length; i++) {
            const course = this.classes[i];
            if (course.number === course_string) {
                this.classes.splice(i, 1);
                return;
            }
        }
    }

    // Check if a class violate any prerequisites or corequisites of the existing courses in a semester. 
    checkRequirements(course) {

        // Create the course object
        // const course = new Course(course_string);

        // For every class in the semester, check if the course is its prerequisite or corequisite
        for (let i = 0; i < this.classes.length; i++) {
            const existing_course = this.classes[i];

            // For each requirement in prerequisites
            for (let j = 0; j < existing_course.requirements['prerequisites'].length; j++) {
                const requirement = existing_course.requirements['prerequisites'][j];

                // For each course in the requirement
                for (let k = 0; k < requirement.length; k++) {
                    const requirement_course = requirement[k];

                    // If the course is the prerequisite of an existing course, return true
                    if (requirement_course === course.number) {
                        return true;
                    }
                }
            }
        }

        // If the course is not the prerequisite of any existing course, return false
        return false;

    }

    // Get the semester as a JSON object
    toJSON() {
        return {
            "name": this.name,
            "term": this.term,
            "year": this.year,
            "classes": this.classes,
            "totalCredits": this.getCredits(),
            "GPA": this.getGPA(),
        }
    }
    
}

// A Profile Object
export class Profile {

    constructor(name) {
        this.name = name;
        this.majors = [];
        this.minors = [];
        this.GPA = 0;
        this.startYear = new Date().getFullYear();
        this.startTerm = "Fall"; // Fall, Spring, Summer, or Winter
        this.classification = "Freshman"; // Freshman, Sophomore, Junior, Senior, or Graduate
        this.universityHonors = "None"; // None, Cum Laude, Magna Cum Laude, or Summa Cum Laude
        this.semesters = [];
    }

    // Get the name of the profile
    getName() {
        return this.name;
    }

    // Calculate and return the entire GPA of the profile, of all the semesters
    getGPA() {
        let totalCredits = 0;
        let totalGradePoints = 0;

        // Loop through all the semesters in the profile
        for (let i = 0; i < this.semesters.length; i++) {
            const semester = this.semesters[i];

            // Get the GPA and credits of the semester
            const GPA = semester.getGPA();
            const credits = semester.getCredits();

            // Add the credits to the total credits
            totalCredits += credits;

            // Add the grade points to the total grade points
            totalGradePoints += GPA * credits;
        }

        // Calculate the GPA
        this.GPA = totalGradePoints / totalCredits;

        // Return the GPA
        return this.GPA;
    }

    // Calculate honors GPA
    getHonorsGPA({ data, profile="default" }) {
        const totalGPA = this.getGPA();
        
        // If GPA is between 3.85-4.0, then return "Summa Cum Laude"
        if (totalGPA >= 3.85) {
            return "Summa Cum Laude";
        }
    
        // If GPA is between 3.500-3.849, then return "Magna Cum Laude"
        else if (totalGPA >= 3.849) {
            return "Magna Cum Laude";
        }
    
        // If GPA is between 3.250-3.499, then return "Cum Laude"
        else if (totalGPA >= 3.250) {
            return "Cum Laude";
        }
    
        // Otherwise return "No Honors"
        else {
            return "No Honors";
        }
    }

    // Get Undergraduate Classification based on total credits taken
    getUndergradClassification(semesterIndex) {

        // For each semester, count the sum of credits taken
        let credits = 0;
        for (let i = 0; i < semesterIndex; i++) {
            const semester = this.semesters[i];
            credits += semester.getCredits();
        }

        if (credits < 24) {
            return "Freshman";
        }
        else if (credits < 54) {
            return "Sophomore";
        }
        else if (credits < 84) {
            return "Junior";
        }
        else {
            return "Senior";
        }
    }

    // Add a semester
    addSemester(term, year, class_list) {

        // Create a semester
        const semester = new Semester(term, year);

        // For class in class list, create a course object and add to semester
        for (let i = 0; i < class_list.length; i++) {
            const course_string = class_list[i];
            semester.addClass(course_string);
        }
        
        // Add the semester to the profile
        this.semesters.push(semester);

        // Return the result
        // return semester;
    }

}

// User Data Object
export class UserData {
    constructor() {
        this.profiles = {
            "default": new Profile("default")
        };
    }

    // Get the profiles of the user
    getProfiles() {
        return this.profiles;
    }

    // Get a specific profile of the user
    getProfile(profile) {
        return this.profiles[profile];
    }

    // Add a profile to the user
    addProfile(profile) {
        this.profiles[profile] = new Profile(profile);
    }

    // Get the user data as a JSON object
    toJSON() {
        return {
            "profiles": this.profiles
        }
    }
}