import { Inter } from 'next/font/google';
import Image from 'next/image';
import { DEFAULT_IMAGE } from 'src/common/constants';
import { FixtureCard } from 'src/types/FixtureCard';

const inter = Inter({ subsets: ['latin'] });

function FixtureCard({
  imageLink = DEFAULT_IMAGE,
  teamOne,
  teamTwo,
  showBorderBottom = false,
  league_title,
  matchDate,
}: FixtureCard) {
  //   const isTablet = useMediaQuery('(min-width: 430px)');

  return (
    <div
      className={`w-full py-2 px-2 bg-white ${inter.className} ${
        showBorderBottom && 'border-b border-grey-50'
      }`}>
      <div className="flex justify-between">
        <div className={`flex font-medium `}>
          <div className="mr-2">
            <h3 className=" text-neutral-600 text-md">{teamOne}</h3>
          </div>
          <div className="py-1">
            <Image
              className="mr-1"
              src={imageLink}
              height={20}
              width={20}
              alt={teamOne || 'Football Club'}
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">{matchDate}</p>
        </div>
        <div className={`flex font-medium `}>
          <div className="py-1">
            <Image
              className="mr-1"
              src={imageLink}
              height={20}
              width={20}
              alt={teamTwo || 'Football Club'}
            />
          </div>
          <div>
            <h3 className=" text-neutral-600 text-md">{teamTwo}</h3>
          </div>
        </div>
      </div>

      <div className="py-1 text-sm text-center text-grey-100">
        <p>{league_title}</p>
      </div>
    </div>
  );
}

export default FixtureCard;
