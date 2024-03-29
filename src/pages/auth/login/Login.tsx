import { Link } from "react-router-dom";
import { LoginInfo } from "./components/LoginInfo";
import { LoginForm } from "./components/LoginForm";


export function  Login ()  {
  return (
    <div className="flex  w-full h-full overflow-hidden p-2">
      <LoginInfo />

      <div className="flex flex-col justify-center w-1/2 px-6">
        <div>
          <h1 className="text-3xl font-semibold">Entre na sua conta</h1>
          <p className="mt-4 text-muted-foreground font-normal text-lg">
            Informe os seus dados de acesso
          </p>
          <LoginForm />
          <div className="mt-8 flex justify-center text-lg">
            <p>Não tem uma conta?</p>
            <Link to="/signup" className="text-primary ml-1">
              Cadastre-se agora.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
