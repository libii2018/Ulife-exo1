import IconSunTwentyFour from "./icons/IconSunTwentyFour";

export const ChatPlaceholder = () => {
  return (
    <div className="m-5">
      <h3 className="text-4xl font-bold text-center my-8">GPT</h3>
      <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl md:w-full">
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconSunTwentyFour
              width={24}
              height={24}
              className="mr-3"
            ></IconSunTwentyFour>
            Exemple
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication prepromt pour faire un article
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconSunTwentyFour
              width={24}
              height={24}
              className="mr-3"
            ></IconSunTwentyFour>
            Exemple
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconSunTwentyFour
              width={24}
              height={24}
              className="mr-3"
            ></IconSunTwentyFour>
            Exemple
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">
            Explication
          </div>
        </div>
      </div>
    </div>
  );
};
