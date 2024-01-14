import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div>
      <form action="POST">
        <Input type="text" name="username" placeholder="Username" />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
