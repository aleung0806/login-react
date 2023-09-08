import { createTheme,
  experimental_sx as sx, } from '@mui/material'

const theme = createTheme({

    palette: {
      primary: {
        main: '#172B4D', 
        light: '#979EAF', // medium gray
        contrast: '#FFFFFF' //white

      },
      secondary: {
        main: '#0052CC', //dark blue - for logo, accents
        light: '#F4F5F7' // very light gray
      },
      text: {
        primary: '#172B4D',
        secondary: '#5E6C84'
      },
      success: {
        main: '#00C380'
      },
      colors: {
        orangeRed: '#FF5630',
        purple: '#6554C0',
        green: '#36B37E',
        teal: '#00B8D9',
        gold: '#FFAB00'
      },
      
      grays: {
        darkest: '#172B4D',
        darker: '#5E6C84',
        medium: '#7A869A',
        light: '#DFE1E6',
        lighter: '#F4F5F7'
      },

      error: {
        main: "#AE2A19"
      }
    },

    typography: {
      h1: {
        fontSize: 16, 
        fontWeight: 600, 
        color: 'rgb(23, 43, 77)', 
        textAlign: 'center'
      },
      p1: {
        fontSize: 14, 
        fontWeight: 'normal', 
        color: '#42526E', 
        textAlign: 'left'
      },
      p2: {
        fontSize: 14, 
        fontWeight: "600", 
        color: 'rgb(94, 108, 132)', 
        textAlign: 'left'
      },
      p3: {
        fontSize: 12, 
        fontWeight: "normal", 
        color: '#6B778C', 
        textAlign: 'left'
      },
      darkestBold14: {
        color: '#7A869A',
        fontSize: '14px',
        fontWeight: '600'
      },
      faint: {
        fontSize: '12px',
        color: '#7A869A',

      },
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'standard'
        }
      },
      MuiInput: {
        defaultProps: {
          fullWidth: true,
          disableUnderline: true,
        },
        styleOverrides: {
          input: {
            padding: "8px 6px",
            color: 'rgb(9, 30, 66)'
          },
          root: {
            border: `2px solid #FFFFFF`,
            '&&:hover': {
              backgroundColor: '#EBECF0',
            },
            '&.Mui-focused': {
              border: `2px solid #4C9AFF`,
              backgroundColor: '#FFFFFF',
              '&&:hover': {
                backgroundColor: '#FFFFFF',
              },
            },
            '&.Mui-error': {
              border: `2px solid #d32f2f`,

            }

          },
        },
        variants: [
          {
            props: { 
              variant: 'login',
            },
            style: {
              border: `2px solid #DFE1E6`,
              padding: 0,
              borderRadius: "3px",
              width: "320px", 
              fontSize: 14, 
              marginTop: "8px",
              '&.filled': {
                borderColor: '#FFFFFF',
                "& input": {
                  fontSize: '16px',
                  color: 'rgb(94, 108, 132)'
                },

              }
            }
          }
        ],
      },
      MuiLink: {
        variants: [
          {
            props: {
              variant: 'body'
            },
            style: {
              fontSize: 14, 
              fontWeight: 'normal', 
              color: "#0052cc",
              textDecoration: 'none',
              '&&:hover': {
                textDecoration: 'underline',
              },
              
            
            }
          }
        ]
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true
        },
        variants: [
          {
            props: { 
              variant: 'login',
            },
            style: {
              width: "320px",
              borderRadius: "3px",
              backgroundColor: '#0052CC', 
              color: '#FFFFFF', 
              fontSize: '14px', 
              textTransform: 'none', 
              height: '40px', 
              padding: 0,
              '&&:hover': {
                backgroundColor: '#0065FF',
              },


            }
          },

          {
            props: { 
              variant: 'outlined',

            },
            style: {
              border: `2px solid #DFE1E6`,
            },
          }
        ],
      },
      MuiIconButton: {
        defaultProps: {

        },
        styleOverrides: {

        },
        variants: [
          {
            props: { 
              variant: 'square',
            },
            style: {
                borderRadius: 1,
            }
          }
        ],
      },
      MuiModal: {
        defaultProps: {

        },
        styleOverrides: {

        },
        variants: [
          {
            props: { 
              variant: 'regular',
            },
            style: {

            }
          },
          {
            props: { 
              variant: 'outlined',

            },
            style: {
              border: `2px solid #DFE1E6`,
            },
          }
        ],
      },
    }
  
});

export default theme