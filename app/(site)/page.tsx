import AuthForm from "./components/AuthForm";

const Home = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <h2
        className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
      >
        Sign in to your account
      </h2>
      <AuthForm />
    </div>
  );
};
export default Home;
