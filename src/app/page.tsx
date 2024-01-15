import UserList from "@/widgets/UserList";


export default function Home() {
  return (
   <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold "> CRUD for learning redux toolkit </h1>
        <UserList/>
   </div>
  )
}
