import { createMuiTheme } from '@material-ui/core/styles';

const pxToRem = (size) => `${size / 16}rem`

const defaultMuiTheme = createMuiTheme();

const defaultTheme = createMuiTheme({
    palette: {
        background: {
            default: '#F4F6F8'
        },
        text: {
            primary: '#1B1F43',
            secondary: '#EBEBEB',
            disabled: '#ABABAB'
        },
        error: {
            main: '#FF4444'
        },

        warning: {
            main: '#F9C257'
        }
    },
    mixins: {
        toolbar: {
            minHeight: 48,
            '@media (min-width:0px) and (orientation:landscape)': {
                minHeight: 40,
            },
            '@media (min-width:600px)': {
                minHeight: 56,
            }
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                ul: {
                    marginBlockStart: 0,
                    marginBlockEnd: 0
                }
            }
        },
        MuiToolbar: {
            regular: {
                backgroundColor: '#282F48'
            }
        },
        MuiButton: {
            root: {
                minWidth: 100,
                height: 40,
                borderRadius: 5,
                padding: '8px 24px'
            },
            contained: {
                backgroundColor: '#4A58B2',
                color: '#FFFFFF',
                '&:hover': {
                    backgroundColor: '#3C499A',
                    color: '#FFFFFF',
                },
                '&:active': {
                    backgroundColor: '#24307E',
                    color: '#FFFFFF',
                },
                '&.Mui-disabled': {
                    backgroundColor: '#B3BAE4',
                    color: '#FFFFFF',
                }
            },
            containedSecondary: {
                backgroundColor: '#FDFDFD',
                color: '#525252',
                border: 'solid 1px #D6D6D6',
                '&:hover': {
                    backgroundColor: '#F2F2F2',
                    color: '#525252',
                },
                '&:active': {
                    backgroundColor: '#D5D6D8',
                    color: '#525252',
                },
                '&.Mui-disabled': {
                    backgroundColor: '#EDEDED',
                    color: '#ABABAB',
                }
            },
            label: {
                fontWeight: 'normal',
                fontFamily: '"Roboto" !important'
            }
        },
        MuiOutlinedInput: {
            root: {
                backgroundColor: 'white',
                borderRadius: 5,
                '& fieldset': {
                    borderColor: '#D6D6D6',
                },
                '&:hover fieldset': {
                    borderColor: '#4A58B2 !important',
                }
            },
            input: {
                color: '#525252',
                height: 40,
                padding: '0 10px',
                // Fixed: override Chrome autofill background color
                '&:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px white inset !important',
                    backgroundColor: 'white !important'
                }
            },
        },
        MuiFormLabel: {
            root: {
                color: '#ABABAB',
                '&.Mui-focused': {
                    color: '#4A58B2'
                },
                '&.Mui-disabled': {
                    color: '#1B1F43'
                }
            }
        },
        MuiInputLabel: {
            outlined: {
                transform: 'translate(14px, 14px) scale(1)'
            }
        },
        MuiTableSortLabel: {
            root: {
                color: 'inherit',
                // onMouse hover
                '&:hover': {
                    color: 'inherit',
                    fontWeight: 600,
                },
                // onMouse click
                '&:active': {
                    color: 'inherit',
                },
            },
            // after sorted
            active: {
                color: 'inherit !important',
                fontWeight: 600,
                fontStyle: 'italic'
            },
            // icon
            iconDirectionAsc: {
                color: 'red !important'
            },
            iconDirectionDesc: {
                color: 'green !important'
            }
        },
        MuiTypography: {
            root: {
                userSelect: 'none',
                fontFamily: '"Roboto" !important'
            },
            caption: {
                color: '#525252'
            },
            colorInherit: {
                fontWeight: "inherit",
                fontSize: 'inherit'
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: 32,
                color: '#525252'
            },
        },
        MuiListItemText: {
            primary: {
                color: '#525252'
            }
        },
        MuiTouchRipple: {
            rippleVisible: {
                color: 'rgba(0, 0, 0, 0.2)'
            },
        },
        MuiListItem: {
            root: {
                '&.Mui-selected': {
                    backgroundColor: '#E1E5F280',
                    '&:hover': {
                        backgroundColor: '#F2F2F2',
                    },
                    '&:active': {
                        backgroundColor: '#E1E5F2FF'
                    }
                }
            },
            button: {
                backgroundColor: 'white',
                '&:hover': {
                    backgroundColor: '#F2F2F2'
                }
            }
        },
        MuiCheckbox: {
            colorPrimary: {
                color: '#1B1F43',
                '&:hover': {
                    color: '#4A58B2'
                },
                '&.Mui-checked': {
                    color: '#4A58B2'
                }
            },
            colorSecondary: {
                color: '#1B1F43',
                '&:hover': {
                    color: '#F52300'
                },
                '&.Mui-checked': {
                    color: '#F52300'
                }
            }
        },
        MuiFormControlLabel: {
            label: {
                color: '#525252'
            }
        },
        MuiSnackbarContent: {
            message: {
                padding: 0,
                minHeight: 32,
                display: 'flex'
            }
        },
        MuiInputBase: {
            input: {
                '&.Mui-disabled': {
                    backgroundColor: '#F5F4EF',
                    color: '#525252'
                }
            }
        },
        MuiFormHelperText: {
            root: {
                color: '#282F48'
            },
        },
        MuiTooltip: {
            tooltip: {
                backgroundColor: '#FFFF',
                color: '#1B1F43',
                boxShadow: defaultMuiTheme.shadows[1],
                fontSize: 11
            }
        },
        MuiPickersDay: {
            day: {
                fontWeight: 400
            },
            current: {
                backgroundColor: 'rgba(255, 255, 0, 0.3)'
            }
        }
    }
});

export default defaultTheme