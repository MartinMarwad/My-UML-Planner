// Source here: https://github.com/ZakAlbert/react-material-you-theme
// Modified by Martin Marwad to be Javascript from Typescript.

import { lighten, darken, alpha } from '@mui/material';


export const DEFAULT_M3_THEME_SCHEME = {
    "light": {
        "primary": "#005faf",
        "onPrimary": "#ffffff",
        "primaryContainer": "#d4e3ff",
        "onPrimaryContainer": "#001c3a",
        "secondary": "#545f71",
        "onSecondary": "#ffffff",
        "secondaryContainer": "#d8e3f8",
        "onSecondaryContainer": "#111c2b",
        "tertiary": "#6e5676",
        "onTertiary": "#ffffff",
        "tertiaryContainer": "#f7d8ff",
        "onTertiaryContainer": "#271430",
        "error": "#ba1a1a",
        "onError": "#ffffff",
        "errorContainer": "#ffdad6",
        "onErrorContainer": "#410002",
        "background": "#fdfcff",
        "onBackground": "#1a1c1e",
        "surface": "#fdfcff",
        "onSurface": "#1a1c1e",
        "surfaceVariant": "#e0e2ec",
        "onSurfaceVariant": "#43474e",
        "outline": "#74777f",
        "outlineVariant": "#c3c6cf",
        "shadow": "#000000",
        "scrim": "#000000",
        "inverseSurface": "#2f3033",
        "inverseOnSurface": "#f1f0f4",
        "inversePrimary": "#a5c8ff"
    },
    "dark": {
        "primary": "#a5c8ff",
        "onPrimary": "#00315f",
        "primaryContainer": "#004786",
        "onPrimaryContainer": "#d4e3ff",
        "secondary": "#bcc7dc",
        "onSecondary": "#273141",
        "secondaryContainer": "#3d4758",
        "onSecondaryContainer": "#d8e3f8",
        "tertiary": "#dabde2",
        "onTertiary": "#3d2946",
        "tertiaryContainer": "#553f5d",
        "onTertiaryContainer": "#f7d8ff",
        "error": "#ffb4ab",
        "onError": "#690005",
        "errorContainer": "#93000a",
        "onErrorContainer": "#ffb4ab",
        "background": "#1a1c1e",
        "onBackground": "#e3e2e6",
        "surface": "#1a1c1e",
        "onSurface": "#e3e2e6",
        "surfaceVariant": "#43474e",
        "onSurfaceVariant": "#c3c6cf",
        "outline": "#8d9199",
        "outlineVariant": "#43474e",
        "shadow": "#000000",
        "scrim": "#000000",
        "inverseSurface": "#e3e2e6",
        "inverseOnSurface": "#2f3033",
        "inversePrimary": "#005faf"
    },
    "tones": {
        "primary": {
            "0": "#000000",
            "10": "#001c3a",
            "20": "#00315f",
            "30": "#004786",
            "40": "#005faf",
            "50": "#0078da",
            "60": "#2792ff",
            "70": "#72adff",
            "80": "#a5c8ff",
            "90": "#d4e3ff",
            "95": "#ebf1ff",
            "99": "#fdfcff",
            "100": "#ffffff"
        },
        "secondary": {
            "0": "#000000",
            "10": "#111c2b",
            "20": "#273141",
            "30": "#3d4758",
            "40": "#545f71",
            "50": "#6d788a",
            "60": "#8791a5",
            "70": "#a1acc0",
            "80": "#bcc7dc",
            "90": "#d8e3f8",
            "95": "#ebf1ff",
            "99": "#fdfcff",
            "100": "#ffffff"
        },
        "tertiary": {
            "0": "#000000",
            "10": "#271430",
            "20": "#3d2946",
            "30": "#553f5d",
            "40": "#6e5676",
            "50": "#876e90",
            "60": "#a288ab",
            "70": "#bea2c6",
            "80": "#dabde2",
            "90": "#f7d8ff",
            "95": "#fdebff",
            "99": "#fffbff",
            "100": "#ffffff"
        },
        "neutral": {
            "0": "#000000",
            "10": "#1a1c1e",
            "20": "#2f3033",
            "30": "#46474a",
            "40": "#5d5e62",
            "50": "#76777a",
            "60": "#909094",
            "70": "#ababae",
            "80": "#c7c6ca",
            "90": "#e3e2e6",
            "95": "#f1f0f4",
            "99": "#fdfcff",
            "100": "#ffffff"
        },
        "neutralVariant": {
            "0": "#000000",
            "10": "#181c22",
            "20": "#2d3138",
            "30": "#43474e",
            "40": "#5b5e66",
            "50": "#74777f",
            "60": "#8d9199",
            "70": "#a8abb4",
            "80": "#c3c6cf",
            "90": "#e0e2ec",
            "95": "#eef0fa",
            "99": "#fdfcff",
            "100": "#ffffff"
        },
        "error": {
            "0": "#000000",
            "10": "#410002",
            "20": "#690005",
            "30": "#93000a",
            "40": "#ba1a1a",
            "50": "#de3730",
            "60": "#ff5449",
            "70": "#ff897d",
            "80": "#ffb4ab",
            "90": "#ffdad6",
            "95": "#ffedea",
            "99": "#fffbff",
            "100": "#ffffff"
        }
    }
};

export const getDesignTokens = (mode, scheme, tones) => {
    return {
        palette: {
            mode,
            primary: {
                main: scheme.primary,
                contrastText: scheme.onPrimary
            },
            onPrimary: {
                main: scheme.onPrimary,
                contrastText: scheme.primary
            },
            primaryContainer: {
                main: scheme.primaryContainer,
                contrastText: scheme.onPrimaryContainer
            },
            onPrimaryContainer: {
                main: scheme.onPrimaryContainer,
                contrastText: scheme.primaryContainer
            },
            secondary: {
                main: scheme.secondary,
                contrastText: scheme.onSecondary
            },
            onSecondary: {
                main: scheme.onSecondary,
                contrastText: scheme.secondary
            },
            secondaryContainer: {
                main: scheme.secondaryContainer,
                contrastText: scheme.onSecondaryContainer
            },
            onSecondaryContainer: {
                main: scheme.onSecondaryContainer,
                contrastText: scheme.secondaryContainer
            },
            tertiary: {
                main: scheme.tertiary,
                contrastText: scheme.onTertiary
            },
            onTertiary: {
                main: scheme.onTertiary,
                contrastText: scheme.tertiary
            },
            tertiaryContainer: {
                main: scheme.tertiaryContainer,
                contrastText: scheme.onTertiaryContainer
            },
            onTertiaryContainer: {
                main: scheme.onTertiaryContainer,
                contrastText: scheme.tertiary
            },
            error: {
                main: scheme.error,
                contrastText: scheme.onError
            },
            onError: {
                main: scheme.onError,
                contrastText: scheme.error
            },
            errorContainer: {
                main: scheme.errorContainer,
                contrastText: scheme.onErrorContainer
            },
            onErrorContainer: {
                main: scheme.onErrorContainer,
                contrastText: scheme.errorContainer
            },
            background2: {
                main: scheme.background,
                contrastText: scheme.onBackground
            },
            onBackground: {
                main: scheme.onBackground,
                contrastText: scheme.background
            },
            surface: {
                main: scheme.surface,
                contrastText: scheme.onSurface
            },
            onSurface: {
                main: scheme.onSurface,
                contrastText: scheme.surface
            },
            surfaceVariant: {
                main: scheme.surfaceVariant,
                contrastText: scheme.onSurfaceVariant
            },
            onSurfaceVariant: {
                main: scheme.onSurfaceVariant,
                contrastText: scheme.surfaceVariant
            },
            inverseSurface: {
                main: scheme.inverseSurface || (mode === 'light' ? tones === null || tones === void 0 ? void 0 : tones.neutral[20] : tones === null || tones === void 0 ? void 0 : tones.neutral[90]),
                contrastText: scheme.inverseOnSurface || (mode === 'light' ? tones === null || tones === void 0 ? void 0 : tones.neutral[95] : tones === null || tones === void 0 ? void 0 : tones.neutral[20])
            },
            inverseOnSurface: {
                main: scheme.inverseOnSurface || (mode === 'light' ? tones === null || tones === void 0 ? void 0 : tones.neutral[95] : tones === null || tones === void 0 ? void 0 : tones.neutral[20]),
                contrastText: scheme.inverseSurface || (mode === 'light' ? tones === null || tones === void 0 ? void 0 : tones.neutral[20] : tones === null || tones === void 0 ? void 0 : tones.neutral[90])
            },
            inversePrimary: {
                main: scheme.inversePrimary || (mode === 'light' ? tones === null || tones === void 0 ? void 0 : tones.neutral[80] : tones === null || tones === void 0 ? void 0 : tones.neutral[40]),
                contrastText: scheme.primary
            },
            surfaceTint: scheme.primary,
            outline: scheme.outline,
            shadow: scheme.shadow,
            background: {
                default: scheme.background,
                paper: scheme.surface
            },
            common: {
                white: scheme.background,
                black: scheme.onBackground,
            },
            text: {
                primary: scheme.onSurface,
                secondary: scheme.onSecondaryContainer,
            },
            divider: scheme.outline
        },
        tones
    };
};

export const getThemedComponents = (theme) => {
    return {
        components: {
            MuiCssBaseline: {
                defaultProps: {
                    enableColorScheme: true
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: theme.palette.outline,
                        backgroundColor: theme.palette.outline
                    }
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1),
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        marginLeft: theme.spacing(1),
                    },
                    indicator: {
                        height: 3,
                        borderTopLeftRadius: 3,
                        borderTopRightRadius: 3,
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        margin: '0 16px',
                        minWidth: 0,
                        padding: 0,
                        [theme.breakpoints.up('md')]: {
                            padding: 0,
                            minWidth: 0,
                        },
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: theme.palette.surface.main,
                        color: theme.palette.onSurface.main,
                        transition: theme.transitions.create(['background-color', 'box-shadow', 'color'], {
                            duration: theme.transitions.duration.short,
                        }),
                    },
                    colorDefault: {
                        background: theme.palette.surface.main,
                        color: theme.palette.onSurface.main,
                        transition: theme.transitions.create(['background-color', 'box-shadow', 'color'], {
                            duration: theme.transitions.duration.short,
                        }),
                    },
                    colorPrimary: {
                        background: theme.palette.mode == 'light' ? lighten(theme.palette.primary.main, 0.85) : darken(theme.palette.primary.main, 0.8),
                        color: theme.palette.surface.contrastText,
                        transition: theme.transitions.create(['background-color', 'box-shadow', 'color'], {
                            duration: theme.transitions.duration.short,
                        }),
                    }
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 'bold'
                    },
                    outlined: {
                        borderColor: theme.palette.outline,
                        //background: theme.palette.surface.main,
                    },
                },
                variants: [
                    {
                        props: { variant: 'elevated' },
                        style: {
                            boxShadow: theme.shadows[1],
                            background: alpha(theme.palette.primary.main, 0.05),
                            color: theme.palette.primary.main,
                            '&:hover': {
                                background: alpha(theme.palette.primary.main, 0.15),
                            }
                        }
                    },
                    {
                        props: { variant: 'filled' },
                        style: {
                            background: theme.palette.primary.main,
                            color: theme.palette.onPrimary.main,
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.primary.main, 0.85),
                            }
                        }
                    },
                    {
                        props: { variant: 'tonal' },
                        style: {
                            background: theme.palette.secondaryContainer.main,
                            color: theme.palette.onSecondaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.secondaryContainer.main, 0.8),
                            }
                        }
                    }
                ]
            },
            MuiFab: {
                styleOverrides: {
                    root: {
                        borderRadius: '18px',
                    }
                },
                variants: [
                    {
                        props: { variant: 'primary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.primaryContainer.main,
                            color: theme.palette.onPrimaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.primaryContainer.main, 0.08) :
                                    darken(theme.palette.primaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'primary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.primaryContainer.main,
                            color: theme.palette.onPrimaryContainer.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.primaryContainer.main, 0.08) :
                                    darken(theme.palette.primaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'secondary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.secondaryContainer.main,
                            color: theme.palette.onSecondaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.secondaryContainer.main, 0.08) :
                                    darken(theme.palette.secondaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'secondary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.secondaryContainer.main,
                            color: theme.palette.onSecondaryContainer.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.secondaryContainer.main, 0.08) :
                                    darken(theme.palette.secondaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'tertiary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.tertiaryContainer.main,
                            color: theme.palette.onTertiaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.tertiaryContainer.main, 0.08) :
                                    darken(theme.palette.tertiaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'tertiary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.tertiaryContainer.main,
                            color: theme.palette.onTertiaryContainer.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.tertiaryContainer.main, 0.08) :
                                    darken(theme.palette.tertiaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'surface' },
                        style: {
                            boxShadow: theme.shadows[3],
                            //background: theme.palette.surface.main,
                            background: alpha(theme.palette.primary.main, 0.05),
                            color: theme.palette.primary.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: alpha(theme.palette.primary.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'surface' },
                        style: {
                            boxShadow: theme.shadows[3],
                            //background: theme.palette.surface.main,
                            background: alpha(theme.palette.primary.main, 0.05),
                            color: theme.palette.primary.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: alpha(theme.palette.primary.main, 0.08),
                            }
                        }
                    }
                ]
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        padding: '10px 8px'
                    }
                },
                variants: [
                    {
                        props: { variant: 'elevation' },
                        style: {
                            boxShadow: theme.shadows[1],
                            backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
                                duration: theme.transitions.duration.short,
                            }),
                            '&:hover': {
                                boxShadow: theme.shadows[2],
                                background: alpha(theme.palette.primary.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'filled' },
                        style: {
                            backgroundColor: theme.palette.surfaceVariant.main,
                            transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
                                duration: theme.transitions.duration.short,
                            }),
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.surfaceVariant.main, 0.8),
                            }
                        }
                    },
                    {
                        props: { variant: 'outlined' },
                        style: {
                            backgroundColor: theme.palette.surface.main,
                            borderColor: theme.palette.outline,
                            transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
                                duration: theme.transitions.duration.short,
                            }),
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.onSurface.main, 0.05),
                            },
                        }
                    }
                ]
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        background: theme.palette.mode === 'dark' ?
                            darken(theme.palette.primary.main, 0.9) :
                            lighten(theme.palette.primary.main, 0.9),
                        color: theme.palette.onSurface.main
                    },
                    outlined: {
                        borderColor: theme.palette.outline,
                        background: theme.palette.surface.main,
                    }
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    root: {
                    //background: theme.palette.surface.main,
                    //color: theme.palette.onSurface.main,
                    },
                    paper: {
                        border: '0px',
                        //background: theme.palette.mode == 'light' ? lighten(theme.palette.primary.main, 0.85) : darken(theme.palette.primary.main, 0.8),
                        //color: theme.palette.surface.contrastText,
                        background: theme.palette.surface.main,
                        color: theme.palette.onSurface.main,
                    }
                }
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        paddingTop: 1,
                        paddingBottom: 1,
                        '& .MuiListItemButton-root': {
                            paddingTop: 8,
                            paddingBottom: 8
                        }
                    }
                }
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 50,
                        '&.Mui-selected': {
                            color: theme.palette.onSecondaryContainer.main,
                            background: theme.palette.secondaryContainer.main,
                            '& > .MuiListItemText-root > .MuiTypography-root': {
                                fontWeight: 'bold'
                            },
                        }
                    },
                },
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: 'inherit',
                        minWidth: 32,
                        '&.Mui-selected': {
                            fontWeight: 'bold'
                        },
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        background: theme.palette.secondaryContainer.main,
                        color: theme.palette.secondaryContainer.contrastText
                    }
                }
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        '&:before': {
                            backgroundColor: theme.palette.surfaceVariant.main
                        },
                        '&.Mui-disabled': {
                            backgroundColor: theme.palette.inverseOnSurface.main,
                            color: theme.palette.inverseSurface.main,
                        }
                    }
                },
            },
            MuiSnackbarContent: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.inverseSurface.main,
                    },
                    message: {
                        color: theme.palette.inverseOnSurface.main
                    },
                    action: {
                        color: theme.palette.inversePrimary.main
                    }
                }
            },
            MuiSwitch: {
                styleOverrides: {
                    root: {
                        width: 42,
                        height: 26,
                        padding: 0,
                        marginLeft: 12,
                        marginRight: 8,
                        '& .MuiSwitch-switchBase': {
                            padding: 0,
                            margin: 7,
                            transitionDuration: '100ms',
                            '&.Mui-checked': {
                                transform: 'translateX(16px)',
                                margin: 4,
                                '& + .MuiSwitch-track': {
                                    backgroundColor: theme.palette.primary.main,
                                    opacity: 1,
                                    border: 0,
                                },
                                '& .MuiSwitch-thumb': {
                                    color: theme.palette.onPrimary.main,
                                    width: 18,
                                    height: 18,
                                },
                                /*'& .MuiSwitch-thumb:before': {
                                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                                        theme.palette.primary.main,
                                    )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                                },
                                '&.Mui-disabled .MuiSwitch-thumb:before': {
                                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                                        alpha(theme.palette.onSurfaceVariant.main, 0.28),
                                    )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                                },*/
                                '&.Mui-disabled + .MuiSwitch-track': {
                                    backgroundColor: alpha(theme.palette.onSurface.main, 0.1),
                                },
                                '&.Mui-disabled .MuiSwitch-thumb': {
                                    color: alpha(theme.palette.surface.main, 0.8),
                                },
                            },
                            '&.Mui-focusVisible .MuiSwitch-thumb': {
                                color: theme.palette.primary.main,
                                border: `6px solid ${theme.palette.primary.contrastText}`,
                            },
                            '&.Mui-disabled .MuiSwitch-thumb': {
                                color: alpha(theme.palette.onSurface.main, 0.3),
                            },
                        },
                        '& .MuiSwitch-thumb': {
                            boxSizing: 'border-box',
                            color: theme.palette.outline,
                            width: 12,
                            height: 12,
                            '&:before': {
                                content: "''",
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                left: 0,
                                top: 0,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            },
                        },
                        '& .MuiSwitch-track': {
                            borderRadius: 26 / 2,
                            border: `1px solid ${theme.palette.outline}`,
                            backgroundColor: theme.palette.surfaceVariant.main,
                            opacity: 1,
                            transition: theme.transitions.create(['background-color'], {
                                duration: 500,
                            }),
                        },
                    },
                }
            }
        }
    };
};
