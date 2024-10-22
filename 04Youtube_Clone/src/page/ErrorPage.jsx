import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-4 text-xl font-semibold border-4 border-red-700">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="mr-3">{error.status}</i>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}