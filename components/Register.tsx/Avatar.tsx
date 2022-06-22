import Image from "next/image";

interface UserInterface {
  name: string;
  email: string;
  image: string;
}

const Avatar = (user: UserInterface) => {
  const { name, image } = user;

  return (
    <div className="border w-4 h-auto rounded-full">
      <Image
        src={image}
        className="w-full"
        alt={`${name} Avatar`}
        layout="fill"
      />
    </div>
  );
};

export default Avatar;
