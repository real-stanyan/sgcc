const JiFen = () => (
  <div className="overflow-x-auto w-full">
    <h1 className="text-center pb-5 font-black text-3xl">
      低压综合服务专业标杆班组建设成效评价标准
    </h1>
    <table className="table-auto w-full border-collapse border border-gray-300">
      <colgroup>
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "40%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
      </colgroup>
      <thead>
        <tr className="bg-gray-100 border-t-4 border-[#12a1a0]">
          {[
            "评价维度",
            "评价指标",
            "评价部门",
            "评价标准",
            "检查方式",
            "指标类型",
            "评价结果",
          ].map((h) => (
            <th
              key={h}
              className="border-b border-gray-300 px-2 py-1 text-center"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            rowSpan={7}
            className="border border-gray-300 text-center align-middle"
          >
            业务实施
          </td>
          <td className="border border-gray-300 text-center">业务类型覆盖率</td>
          <td rowSpan={7} className="border border-gray-300 text-center">
            营销部、配网部、安监部
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组所辖区域内低压业扩报装及分布式光伏接入、计量装置装拆及运维、用电检查、低压配网管理、低压设备运维等核心业务能力实施类型应全部覆盖。（各类业务定义参见《国网江苏省电力有限公司打造一线核心标杆班组管理办法》中附件1《地市供电公司、国网江苏超高压公司标杆班组建设目录及自主实施业务范围》每条次“业务类别”），年度内所在班组确无相关业务类型工作计划安排的，可通过培训能力认证替代。
          </td>
          <td className="border border-gray-300">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td rowSpan={2} className="border border-gray-300 text-center">
            自主实施业务量
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.全量开展低压业扩报装及分布式光伏并网涉及的现场勘查、方案制定、竣工检验、供用电合同/购售电合同签订管理等工作；
              </li>
              <li>
                2.全量开展低压客户及分布式光伏客户用电安全管理、电力保障、定比定量定期校核、低压客户的窃电处理、违约用电处理、分布式光伏违规并网处理等用电检查工作；
              </li>
              <li>
                3.全量开展低压客户及分布式光伏发电户减容、迁址、移表、分户、并户等变更用电涉及的现场勘查和方案制定、竣工检验、供用电合同变更管理；
              </li>
              <li>4.全量开展低压用户计量装置现场检测及差错调查处理工作；</li>
              <li>
                5.全量开展计量装置装拆、运维、巡视、改造管理工作；全量开展计量资产管理工作；全量开展线损治理工作；全量开展充电设施采集接入及监测工作；全量开展抄表、停复电管理工作；全量开展客户服务工作；全量开展低压营配数据治理工作。
              </li>
              <li>
                6.全量开展频繁停电台区低压线路及一二次设备巡视检查、带电检测业务，并开展数据分析及问题诊断。
              </li>
              <li>7.全量开展设备工作许可，现场安全风险辨识和管控。</li>
              <li>8.全量开展低压复杂故障抢修组织，开展低压故障分析。</li>
              <li>
                9.全量开展低压配网运行分析、低压可靠性管理、设备隐患缺陷管理、不停电作业管理以及图模异动管理。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.自主开展低压计量装置（含计量箱及内部设备）和采集设备的新装、更换等工作，每开展150项加1分，不超过5分。
              </li>
              <li>
                2.自主开展低压负荷切割、横担及线夹更换、拉线更换等低压架空线路检修。自主开展电缆段更换、电缆终端制作、电缆中间接头制作等电缆线路检修。自主开展低压综合配电箱、电缆分支箱更换等设备检修。自主开展低压线路及设备交接试验、例行试验、诊断性试验。每开展2项加1分，不超过5分。
              </li>
              <li>
                3.深化营配低压业务融合，每有一名单一员工自主完成5项及以上低压用户接入工作全流程（负责业扩查勘、方案制定、低压配网项目管理、工作许可、计量装置安装等全流程）加1分，不超过5分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高15分</td>
        </tr>
        <tr>
          <td rowSpan={2} className="border border-gray-300 text-center">
            业务实施质量
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.年度内未发生被总部/省公司通报的严重违章。</li>
              <li>2.年度内未发生七级及以上有责安全事件。</li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.不发生“三指定”、“体外循环”等服务问题，未有自主实施业务引发的重大舆情。
              </li>
              <li>
                2.应满足低压业扩及光伏接入、计量装置现场检测、用电检查、变更用电等核心业务的规程规范、管理规定，未有引发有责投诉。
              </li>
              <li>
                3.应满足相关运维、检修质量规程规范、管理规定以及省公司自主实施关于安全质量规定要求，未有设备运维不当造成线路、设备停运，不发生因检修质量问题导致的设备再次停电。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td rowSpan={2} className="border border-gray-300 text-center">
            业务自主实施能力回归
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组员工能力覆盖率应达60%以上（能力覆盖率：标杆班组员工具备能力总数/(标杆班组总人数*业务类型)（不含当年入职的新员工），2年内自主实施该类型业务3次及以上，则认为具备此类型业务能力，若2年内无该项业务或业务次数少可采取培训替代）。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.自主实施业务方面，有工艺改进、发明专利、管理创新等，经专业部门认可的，每项加1分，不超过3分。
              </li>
              <li>
                2.结提炼新工艺工法、修编优化业务流程、创新服务举措等，经专业部门认可下发的，每项加1分，不超过3分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高5分</td>
        </tr>
        <tr>
          <td rowSpan={3} className="border border-gray-300 text-center">
            人才培养
          </td>
          <td rowSpan={2} className="border border-gray-300 text-center">
            青年员工培养
          </td>
          <td rowSpan={3} className="border border-gray-300 text-center">
            组织部
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.新进本专业的大学生应全部纳入标杆班组培养。</li>
              <li>2.符合申报条件人员高级工（三级）取证率不低于70%。</li>
              <li>
                3.参加省公司党委组织部统一组织的抽考、普考，合格率不低于80%。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.符合申报条件人员高级工（三级）取证率不低于70%，每增加10%加1分，不超过3分。
              </li>
              <li>
                2.每增加1名技师（二级）加0.5分，高级技师（一级）加一分；增加1名省公司级人才加1分，增加1名省部级人才加3分，最高不超过4分。
              </li>
              <li>
                3.标杆班组建设人才培养经验在省公司信息、智库等刊登推广，每项加1分；在国网报等刊登推广，每项加2分，不超过3分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">技能提升</td>
          <td className="border border-gray-300 text-left p-2">
            参加国网公司级技能竞赛，受表彰，获得第1、2、3名，分别加3、2、1分，获得第4名及以下，加0.5分；参加省公司技能竞赛，受表彰，获得第1、2、3名，分别加2、1、0.5分。不超过10分。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td rowSpan={2} className="border border-gray-300 text-center">
            管理机制
          </td>
          <td className="border border-gray-300 text-center">创新创效</td>
          <td className="border border-gray-300 text-center">工会</td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.班组积极开展创新攻关活动（QC、班组“五小”创新、职工技术创新、科技创新），有明确立项、按期推进、顺利闭环，班组员工在项目成员中排序前三，其中，地市公司级每项得0.5分，省公司级每项得1分。同一项目不兼得、不累计，按照最高得分计算。不超2分。
              </li>
              <li>
                2.班组荣获优秀创新成果（QC、班组“五小”创新、职工技术创新、科技创新），班组员工在项目完成人中排序前三，其中，省部级（含国网公司）及以上，得2分；地市级（含省公司）得1分。同一项目不兼得、不累计，按照最高得分计算。不超5分。
              </li>
              <li>
                3.班组自身完成的创新成果在工作中得到实际应用，其中，在地市公司推广得1分；在省公司推广得2分；在国家电网公司全面推广得3分。不超3分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">考核激励</td>
          <td className="border border-gray-300 text-center">企管部</td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.是否制定一线核心标杆班组专项奖励政策，运用以工作票数量、班组“三种人”数量等体现标杆班组工作实绩的绩效评价方法。
              </li>
              <li>
                2.在完成标杆班组年度自主实施任务、工作业绩达标的情况下，标杆班组骨干员工绩效工资收入水平是否高于其他班组同层级人员。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-5">
      <h1 className="font-bold">说明</h1>
      <ul className="flex flex-col">
        <li>1.达标制指标如有一项未达标，该标杆班组考核结果为未通过。</li>
        <li>
          2.标杆班组所有达标制指标合格后，根据加分情况划分优秀、良好、合格，其中业务实施加分按80%折算，人才培养、管理机制加分按20%折算。
        </li>
      </ul>
    </div>
  </div>
);

export default JiFen;
