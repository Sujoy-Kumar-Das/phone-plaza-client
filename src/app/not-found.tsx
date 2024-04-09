import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div>
        <h1 className=" text-5xl lg:text-7xl text-info ">
          This page is not found
        </h1>
        <div className=" flex justify-center">
          <Link href={"/"} className=" mt-5 btn btn-primary btn-lg">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
