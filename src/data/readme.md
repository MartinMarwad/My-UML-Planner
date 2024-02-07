# My UML Planner | JSON Database

This folder contains the source data for the application. The data is built from a combination of scraping and using the UML API.

## `index.js`

This is the main file in this folder. This contains data structures for interacting with courses, colleges, etc. It also includes useful functions for parsing the database and manipulating data to add, remove, or edit classes in the User Data.

## `college.json`

This file contains a json file of useful data structures that were embeded from the UML website: [https://www.uml.edu/catalog/advance-search.aspx](https://www.uml.edu/catalog/advance-search.aspx)

- List of Colleges
- List of Departments
- List of Programs (undergraduate majors?)
- List of Core Curriculum Criteria
- List of Core Curriculum Outcomes

This data in this file is taken directly from the page and is unmodified.

## `courses` (folder)

This folder contains a complete list of all courses offered by UML for undergrad, grad, and beyond. This file was generated from the UML Now Cli tool, which scrapes and parses the UML Course Catalog website for course details: [https://github.com/MartinMarwad/UML-NOW-CLI](https://github.com/MartinMarwad/UML-NOW-CLI)

To generate or update this file, first install the tool and then run the following command in this directory:

```
python3 -m umlnow search courses --parse --department=COMP > total.json
```

**Note: the `--parse` flag forces the command to output parsed course data by making additional requests to lookup each course name, prereqs, credits, description, etc. So it will probably take a long time to run (maybe hours). **

## `overrides.courses.json`

There is a good chance that the UML Now CLI tool does not get the correct prereqs or coreqs for a course. This file provides a way to add quick overrides to correct incorrectly scraped info.

```bash
# Override the contents of courses.json with the contents of overrides.courses.json
jq -s '.[0] * .[1]' courses.json overrides.courses.json > courses.json 
```

This will take the JSON objects in both `courses.json` and `overrides.courses.json`, merge them together, and then write the merged object back to `courses.json`. If there are any conflicts, the values from `overrides.courses.json` will take precedence.
