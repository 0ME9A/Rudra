import Home from "@/components/Pages/Home/Home";

export default function page() {
  return (
    <div className="relative overflow-auto snap-y overflow-x-hidden">
      <div className="flex flex-col space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
        <Home />
      </div>
    </div>
  );

  return <Home />;
  // return (
  //   <>
  //     <div className="snap-start h-screen flex items-center justify-center">
  //       <img
  //         src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
  //         className="object-cover h-full w-full"
  //         alt="Image 1"
  //       />
  //     </div>
  //     <div className="snap-start h-screen flex items-center justify-center">
  //       <img
  //         src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
  //         className="object-cover h-full w-full"
  //         alt="Image 2"
  //       />
  //     </div>
  //     <div className="snap-start h-screen flex items-center justify-center">
  //       <img
  //         src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
  //         className="object-cover h-full w-full"
  //         alt="Image 3"
  //       />
  //     </div>
  //     <div className="snap-start h-screen flex items-center justify-center">
  //       <img
  //         src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
  //         className="object-cover h-full w-full"
  //         alt="Image 4"
  //       />
  //     </div>
  //     <div className="snap-start h-screen flex items-center justify-center">
  //       <img
  //         src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
  //         className="object-cover h-full w-full"
  //         alt="Image 5"
  //       />
  //     </div>
  //     <div className="snap-start h-screen flex items-center justify-center">
  //       <img
  //         src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
  //         className="object-cover h-full w-full"
  //         alt="Image 6"
  //       />
  //     </div>
  //   </>
  // );
}
