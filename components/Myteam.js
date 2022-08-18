import Link from "next/link";

const Myteam = () => {
    return (
        <div className="basis-4/5 bg-gray-100">
          <h1 className="text-2xl">Welcome Page</h1>
          <Link href='/myteam'>
            <a className="underline">Click here to navigate to myteam dashboard</a>
          </Link>
        </div>
    );
}

export default Myteam;