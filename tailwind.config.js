//  @type {import('tailwindcss').Config} 
export default {
  content: ["./*.html"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend:  {
      fontfamily:{
        "sansorif" : "sansorif"
      }
      
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}



