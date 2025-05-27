# Notes App 📝

A modern, cloud-based notes application built with Angular 19, featuring a beautiful UI powered by TailwindCSS and Spartan UI components.

![Notes App](https://img.shields.io/badge/Angular-19-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4)
![Spartan UI](https://img.shields.io/badge/Spartan_UI-Latest-purple)

## ✨ Features

### 🔐 Authentication System

- **User Registration & Login**: Secure authentication with email and password
- **JWT Token Management**: Automatic token handling and storage
- **User Profile Display**: Shows user's first name, last name, and profile image
- **Session Management**: Persistent login state across browser sessions

### 📋 Notes Management (CRUD Operations)

- **Create Notes**: Add new notes with title and content through an intuitive dialog
- **Read Notes**: View all your notes in a responsive grid layout
- **Update Notes**: Edit existing notes with in-place modification
- **Delete Notes**: Remove notes with confirmation dialog for safety

### 🎨 User Interface & Experience

- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark Mode Support**: Built-in dark/light theme switching
- **Loading States**: Skeleton loaders while fetching data
- **Toast Notifications**: Real-time feedback for all user actions
- **Modern UI Components**: Built with Spartan UI library for consistent design

### 🚀 Performance & Technical Features

- **Server-Side Rendering (SSR)**: Built with Angular SSR for better SEO and initial load times
- **Progressive Web App (PWA)**: Offline capabilities and app-like experience
- **Lazy Loading**: Efficient component loading for better performance
- **HTTP Error Handling**: Comprehensive error management with user-friendly messages
- **Form Validation**: Real-time validation with custom validators

### 📱 Mobile Experience

- **Touch-Friendly Interface**: Optimized for mobile interactions
- **Floating Action Button**: Quick note creation on mobile devices
- **Responsive Navigation**: Adaptive navbar for different screen sizes
- **Swipe Gestures**: Intuitive mobile navigation

## 🛠️ Technology Stack

### Frontend Framework

- **Angular 19**: Latest Angular framework with standalone components
- **TypeScript 5.0**: Type-safe development with modern ES features
- **RxJS 7.8**: Reactive programming for API calls and state management

### UI & Styling

- **TailwindCSS 3.4**: Utility-first CSS framework for rapid UI development
- **Spartan UI**: Angular UI component library built on top of shadcn/ui
- **Lucide Icons**: Beautiful, customizable SVG icons
- **Angular Material**: Additional UI components and design system

### Backend Integration

- **HTTP Client**: Angular's built-in HTTP client for API communication
- **REST API Integration**: Full CRUD operations with Xano backend
- **JWT Authentication**: Secure token-based authentication

### Development Tools

- **Angular CLI 19**: Command-line interface for project scaffolding and build
- **Karma & Jasmine**: Unit testing framework
- **ESLint & Prettier**: Code linting and formatting
- **Angular DevKit**: Build optimization and development server

## 🏗️ Project Structure

```
src/
├── app/
│   ├── auth/                     # Authentication module
│   │   ├── login-form/          # Login component with validation
│   │   ├── signin-form/         # Registration component
│   │   └── validators/          # Custom form validators
│   ├── component/
│   │   ├── notes/               # Main notes functionality
│   │   │   ├── notes-list/      # Notes display grid
│   │   │   ├── note-card/       # Individual note component
│   │   │   ├── new-note-dialog/ # Create note modal
│   │   │   ├── modify-note-dialog/ # Edit note modal
│   │   │   ├── delete-dialog/   # Delete confirmation modal
│   │   │   └── notes-skeleton/  # Loading state component
│   │   └── navbar/              # Navigation component
│   ├── service/                 # Business logic services
│   │   └── notes.service.ts     # API communication service
│   ├── model/                   # Data models
│   │   ├── note.model.ts        # Note entity
│   │   └── userinfo.model.ts    # User entity
│   └── footer/                  # Footer component
├── libs/ui/                     # Spartan UI component library
└── public/                      # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Angular CLI 19

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### Available Scripts

```bash
# Development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Run with watch mode
npm run watch

# Format code
npm run format

# Deploy to GitHub Pages
npm run deploy:gh-pages
```

## 🔧 Configuration

### API Endpoints

The app connects to Xano backend services:

- **User API**: `https://x8ki-letl-twmt.n7.xano.io/api:Y6FZ87f5`
- **Notes API**: `https://x8ki-letl-twmt.n7.xano.io/api:lJojGs4r`

### Environment Variables

Configure your environment in `src/environments/`:

- `environment.ts` - Development configuration
- `environment.prod.ts` - Production configuration

## 📱 Usage

### Authentication

1. **Register**: Create a new account with email and password
2. **Login**: Sign in with your credentials
3. **Automatic Login**: Stay logged in across sessions

### Managing Notes

1. **Create**: Click the "+" button or "Add Note" to create new notes
2. **Edit**: Click the pencil icon on any note card to modify
3. **Delete**: Click the trash icon and confirm deletion
4. **View**: All notes are displayed in a responsive grid

### Navigation

- **Desktop**: Use the top navigation bar with user menu
- **Mobile**: Access features through the responsive mobile interface
- **Floating Button**: Quick note creation on mobile devices

## 🎨 UI Components

### Spartan UI Integration

The app uses a comprehensive set of UI components:

- **Cards**: Note display containers
- **Dialogs**: Modal windows for CRUD operations
- **Buttons**: Various button styles and states
- **Forms**: Input fields with validation
- **Menus**: Dropdown and context menus
- **Tooltips**: Helpful user guidance
- **Skeletons**: Loading state indicators
- **Toasts**: Success and error notifications

### Responsive Design

- **Mobile First**: Optimized for small screens
- **Tablet Support**: Medium screen adaptations
- **Desktop**: Full-featured desktop experience
- **Grid System**: Flexible note layout (1-3 columns based on screen size)

## 🧪 Testing

### Unit Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

- **Components**: Full component testing with Angular Testing Utilities
- **Services**: API service testing with HTTP mocking
- **Models**: Data model validation testing

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

### GitHub Pages Deployment

```bash
npm run deploy:gh-pages
```

### Server-Side Rendering

The app supports SSR for better SEO and performance:

```bash
npm run serve:ssr:notes-app
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Angular Team**: For the amazing framework
- **TailwindCSS**: For the utility-first CSS framework
- **Spartan UI**: For the beautiful component library
- **Lucide Icons**: For the icon set
- **Xano**: For the backend API platform

## 📞 Support

For support, email [your-email@example.com] or create an issue in this repository.

---

**Built with ❤️ using Angular, TailwindCSS, and Spartan UI**
