export interface IProject {
  id: number;
  title: string;
  description: string;
  link: ILink[];
  technologies: string[];
  mockup: string;
}

export interface ILink {
  url: string;
  title: string;
}

const projects: IProject[] = [
    {  
      id: 1,  
      title: "GoBarber",
      description: "Scheduling system for customers of any barber shop. Complete project with mobile application, web part and API for communication with the backend for data processing",
      link: [
        {
          url: "https://github.com/lucasvleal/GoBarber-APP",
          title: "GoBarber on Github",
        }
      ],
      technologies: ["react-native", "reactjs", "nodejs", "typescript", "docker"],
      mockup: 'Done GB.png',
    },
    {  
      id: 2,  
      title: "SimpleSearch",
      description: "Application that segments and identifies objects in a photo in order to search for it on the internet, returning links from sites where it is located.",
      link: [
        {
          url: "https://github.com/lucasvleal/SimpleSearch-APP",
          title: 'SimpleSearch on Github',
        }
      ],
      technologies: ["react-native", "javascript", "python"],
      mockup: 'Done SS.png',
    },
    {  
      id: 3,  
      title: "Força & Luz",
      description: "Company e-commerce and customer loyalty application, where you can earn points and exchange for pre-established prizes. In addition, it also has electric energy expenditure calculators according to the furniture chosen, according to the branch of the company.",
      link: [
        {
          url: "https://forcaeluzeletrico.com.br",
          title: "Força & Luz Website",
        },
        {
          url: "https://play.google.com/store/apps/details?id=com.forcaeluzeletrico.myapp",
          title: "Força & Luz App on Google Play"
        }
      ],
      technologies: ["html", "css", "react-native", "php", "jquery", "javascript"],
      mockup: 'Done F&L.png',
    },  
    {  
      id: 4,  
      title: "ArqDecor",
      description: "Customer loyalty mobile app, where you can earn points and exchange for pre-established prizes.",
      link: [
        {
          url: "https://apps.apple.com/br/app/arqdecor/id1471869943",
          title: "ArqDecor App on Apple Store",
        }, 
        {
          url: "https://play.google.com/store/apps/details?id=com.hexdevelopment.arqdecor",
          title: "ArqDecor App on Google Play",
        }
      ],
      technologies: ["react-native", "javascript"],
      mockup: 'Done AD.png',
    },
    {  
      id: 5,  
      title: "ImSick",
      description: "Mobile app for delivery of medicines. It counts on drugstores, the products they offer, shopping cart and extract of purchases already made. In addition to the entire flow of insertion of user information for delivery.",
      link: [
        {
          url: "coming soon...",
          title: "coming soon...",
        }
      ],
      technologies: ["react-native", "javascript"],
      mockup: 'Done IS.png',
    }, 
    {  
      id: 6,  
      title: "Lealdad Store",
      description: "Front end of an ecommerce developed without using any framework.",
      link: [
        {
          url: "https://github.com/lucasvleal/lealdade-store",
          title: "Lealdade Store on Github",
        }
      ],
      technologies: ["html", "css", "javascript"],
      mockup: 'Done LS.png',
    }, 
    
]

export default projects;