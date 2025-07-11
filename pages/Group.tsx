import Header from "../components/common/Header";
import Banzu from "../components/tables/GroupTables/BanZu";

const Group = () => {
  return (
    <div className="bg-[url('/images/table_bg.webp')] bg-cover lg:bg-contain bg-bottom bg-no-repeat">
      <Header />

      <img
        src="/images/team_banner.webp"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full px-12 py-14 flex flex-col items-start gap-[80px] pb-[50vh]">
        {/* pe text */}
        <div
          className={`
        flex lg:hidden justify-center items-center w-full
        `}
        >
          <h1 className="font-semibold text-xl text-black/70">
            请用大屏查看表格
          </h1>
        </div>

        <Banzu />
      </div>
    </div>
  );
};

export default Group;
