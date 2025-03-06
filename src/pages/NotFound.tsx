
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-agrobravo-light p-4">
      <div className="max-w-md w-full glass-card p-10 rounded-xl text-center">
        <div className="mb-8 flex justify-center">
          <Logo variant="default" />
        </div>
        <div className="w-20 h-20 bg-agrobravo-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-agrobravo-red">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-agrobravo-navy">Página não encontrada</h1>
        <p className="text-agrobravo-gray mb-8">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center btn-primary"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          <span>Voltar para a página inicial</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
