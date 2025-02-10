import { useState } from 'react';
import { Heart, HeartCrack } from 'lucide-react';

type Stage = 'initial' | 'accepted' | 'rejected' | 'final';

function App() {
  const [stage, setStage] = useState<Stage>('initial');
  const [rejectionCount, setRejectionCount] = useState(0);
  const [noButtonScale, setNoButtonScale] = useState(1);

  const handleNo = () => {
    setStage('rejected');
    setRejectionCount(prev => prev + 1);
    setNoButtonScale(prev => Math.max(0, prev - 0.1)); // Decrease by 10% each time
  };

  const getNoButtonText = () => {
    const texts = [
      'No',
      'Are you sure?',
      'Really sure?',
      'Think again!',
      'Last chance!',
      'Surely not?',
      'You might regret this!',
      'Give it another thought!',
      'Are you absolutely sure?',
      'This could be a mistake!',
      'Have a heart!',
      'Don\'t be so cold!',
      'Change of heart?',
      'Wouldn\'t you reconsider?',
      'Is that your final answer?',
      'You\'re breaking my heart ;(',
    ];
    return texts[Math.min(rejectionCount, texts.length - 1)];
  };

  const renderContent = () => {
    switch (stage) {
      case 'initial':
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">
              Will you be my Valentine? 💝
            </h1>
            <img
              src="https://media.giphy.com/media/WU62UnbHDjYvdXAYIR/giphy.gif?cid=790b76110yf2hxxi2joq46b4d97xoiu7kyfx0bj15ps3cfdy&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="Cute anime girl smiling"
              className="mx-auto rounded-lg shadow-lg mb-8 max-w-full h-auto"
            />
            <div className="space-y-4">
              <button
                onClick={() => setStage("accepted")}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all transform hover:scale-110"
              >
                Yes <Heart className="inline ml-2" />
              </button>
              {noButtonScale > 0 && (
                <button
                  onClick={handleNo}
                  style={{ transform: `scale(${noButtonScale})` }}
                  className="block mx-auto mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all"
                >
                  {getNoButtonText()} <HeartCrack className="inline ml-2" />
                </button>
              )}
            </div>
          </div>
        );

      case 'rejected':
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-8">WDYM NO! 😠</h1>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWp5YnN2N2IxMmZnNnZnNTQ1ZW1qMWwwNml3b2tlYXBnaGg1YTFpciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nXWxE3nbUpJdyTnGRF/giphy.gif"
              alt="Angry anime reaction"
              className="mx-auto rounded-lg shadow-lg mb-8 max-w-full h-auto"
            />
            <div className="space-y-4">
              <button
                onClick={() => setStage('accepted')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all transform hover:scale-110"
              >
                Okay, yes! <Heart className="inline ml-2" />
              </button>
              {noButtonScale > 0 && (
                <button
                  onClick={handleNo}
                  style={{ transform: `scale(${noButtonScale})` }}
                  className="block mx-auto mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all"
                >
                  {getNoButtonText()} <HeartCrack className="inline ml-2" />
                </button>
              )}
            </div>
          </div>
        );

      case 'accepted':
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">Yaaay! 🎉</h1>
            <img
              src="https://i.giphy.com/JXibbAa7ysN9K.webp"
              alt="Happy anime reaction"
              className="mx-auto rounded-lg shadow-lg mb-8 max-w-full h-auto"
            />
            <button
              onClick={() => setStage('final')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-all transform hover:scale-110"
            >
              Next <Heart className="inline ml-2" />
            </button>
          </div>
        );

      case 'final':
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">I Love You! ❤️</h1>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHhzZmNxOWgwc2U2MGt6b3lzeTVyeWp4aHZsZzQwbmk1cHc2ajNnciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CNUb51EbTxuRG/giphy.gif"
              alt="Love anime reaction"
              className="mx-auto rounded-lg shadow-lg mb-8 max-w-full h-auto"
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;