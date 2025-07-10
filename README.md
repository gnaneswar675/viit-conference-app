# React Conference App

This project is a React-based application for the International Conference on Mathematical & Statistical Foundations and Applications of Generative AI (MSFA-GAI). It provides all the necessary information regarding the conference, including details about the event, registration, speakers, and more.

## Project Structure

The project is organized into the following main directories and files:

- **public/**: Contains the static files for the application.
  - **index.html**: The main HTML file that serves as the entry point for the React application.

- **src/**: Contains the source code for the React application.
  - **components/**: Contains all the React components for different sections of the conference website.
    - **AboutSection.jsx**: Information about the conference.
    - **CommitteeSection.jsx**: Lists the conference committee members.
    - **ContactSection.jsx**: Provides contact information and a contact form.
    - **ExtendedPublicationSection.jsx**: Details post-conference publication opportunities.
    - **FAQSection.jsx**: Contains frequently asked questions and their answers.
    - **Footer.jsx**: Includes the conference tagline and social media links.
    - **HeroSection.jsx**: Displays the main title and details of the conference.
    - **KeyDatesSection.jsx**: Outlines important dates related to the conference.
    - **Navbar.jsx**: Contains navigation links to different sections of the conference website.
    - **PublicationsSection.jsx**: Describes the publication opportunities for accepted papers.
    - **RegistrationSection.jsx**: Lists the registration fees for different participant categories.
    - **SpeakersSection.jsx**: Lists the keynote speakers for the conference.
    - **SpecialThemeSection.jsx**: Highlights the special theme of the conference.
    - **SubmissionSection.jsx**: Outlines the submission procedures for papers.
    - **TopicsSection.jsx**: Lists the topics covered in the conference.
  - **App.jsx**: The main application component that imports and renders all the section components.
  - **index.js**: The entry point for the React application.
  - **styles/**: Contains the CSS styles for the application.
    - **style.css**: The main stylesheet for the application.

- **package.json**: The configuration file for npm, listing the dependencies and scripts for the project.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-conference-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.