import { useRouter } from "next/router";
export default function handle404() {
  const router = useRouter();
  function handle() {
    router.push("/");
  }

  return (
    <div>
      this Route does not exist :(
      <br></br>
      <button onClick={handle}>Go To Home</button>
    </div>
  );
}
