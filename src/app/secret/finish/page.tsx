import preparedData from "@/data/preparedData";
import CryptoJS from "crypto-js";

export default function Finish({
  params,
  searchParams,
}: {
  params: { round: string };
  searchParams: { secret?: string };
}) {
  const winner = preparedData.find(item => CryptoJS.SHA256(item.name.trim().toLowerCase()).toString() === searchParams.secret);
  return (
    <main className="h-full flex min-h-screen flex-col items-center p-10 bg-gradient-to-b from-zinc-600 to-zinc-900 text-white justify-center">
      <h1 className="text-3xl text-green-500 text-center">Поздравляю, {winner?.name}, Вы победили!</h1>
    </main>
  );
}
