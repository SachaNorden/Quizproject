import HomePage from '../Pages/HomePage';
import QuizPage from '../Pages/QuizPage';
import ContactPage from '../Pages/ContactPage';
import MycvPage from '../Pages/MycvPage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import Logout from '../Logout/Logout';
import CreateQuestion from '../Pages/CreateQuestion';

const routes = {
    '/': HomePage,
    '/quizPage': QuizPage.QuizPage,
    '/contact': ContactPage,
    '/cv': MycvPage,
    '/login':LoginPage,
    '/register':RegisterPage,
    '/logout': Logout,
    '/createQuestion': CreateQuestion
};
export default routes;