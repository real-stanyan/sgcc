const Peidianyunjian = () => (
  <div className="overflow-x-auto w-full">
    <h1 className="text-center pb-5 font-black text-3xl">
      配电专业标杆班组建设成效评价标准
    </h1>
    <table className="table-auto w-full border-collapse border border-gray-300">
      <colgroup>
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "30%" }} />
        <col style={{ width: "20%" }} />
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
            安监部 配网部
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组所辖区域内生产准备及验收、设备运维、设备检修、应急抢修、配电自动化等核心业务能力实施类型应全类型覆盖。（各类业务定义参见《国网江苏省电力有限公司打造一线核心标杆班组管理办法》中附件1《地市供电公司、国网江苏超高压公司标杆班组建设目录及自主实施业务范围》每条次“业务类别”），年度内所在班组确无相关业务类型工作计划安排的，可通过培训能力认证替代。
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场检查、系统检查、资料核查
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
                1.全量开展配网改造项目储备需求方案制定，参与网架优化、中压业扩配套等方案审查，具备配网相关方案编制能力。
              </li>
              <li>
                2.全量开展新、改、扩建工程土建和电气（含自动化终端设备）关键环节验收，审核设备投运、设备运行、检修试验等资料。
              </li>
              <li>
                3.全量开展配网线路及设备巡视计划管理以及重复故障线路特巡工作。
              </li>
              <li>
                4.重复故障线路（森林火灾等重大隐患线路）带电检测、无人机巡检数量不低于20%，全量开展相关检测报告数据分析及诊断分析。
              </li>
              <li>5.全量开展配电设备倒闸操作、现场工作许可。</li>
              <li>
                6.全量组织配网线路及设备故障巡视、故障点确认、故障隔离；制定中压线路及设备故障抢修方案，并组织故障修复。
              </li>
              <li>7.全量开展重复故障线路自动化终端巡检运维及问题分析。</li>
              <li>
                8.全量开展配网设备运行分析及设备状态诊断分析及评价、线路综合检修计划制定、缺陷隐患管理、可靠性管理。
                相关说明：班组职责中不包含以上业务的，不作为否决项。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场检查、系统检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.开展避雷器更换、导线绑扎、绝缘子更换等部分检修作业登杆作业，技改大修、配网工程等业务范围内架空线路杆塔、导地线更换，柱上设备主要部件更换，变压器、开关柜主要零部件更换等B、C、D类关键环节检修，新投设备交接试验等业务，班组每开展2项加1分，不超过10分。
              </li>
              <li>
                2.开展自动化终端调试、终端检修业务，班组每开展2项加1分，不超过5分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场检查、系统检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高15分</td>
        </tr>
        <tr>
          <td
            rowSpan={3}
            className="border border-gray-300 text-center align-middle"
          >
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
            应满足相关运维、检修质量规程规范、管理规定以及省公司自主实施关于安全质量规定要求，未有设备运维不当、验收不到位等造成线路、设备停运，不发生因检修质量问题导致的设备再次停电。
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            总结提炼新工艺工法、修编修试质量提升意见、撰写技术监督意见、管理要求等，经专业部门认可下发的，应在标杆班组评价中优先考虑加分，每项加1分，不超过5分。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场检查、系统检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高5分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">
            业务自主实施能力回归
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组员工能力覆盖率应达60%以上（能力覆盖率：标杆班组员工具备能力总数/(标杆班组总人数*业务类型)（不含当年入职的新员工），2年内自主实施该类型业务3次及以上，则认为具备此类型业务能力）。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场检查、系统检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td
            rowSpan={3}
            className="border border-gray-300 text-center align-middle"
          >
            人才培养
          </td>
          <td
            rowSpan={2}
            className="border border-gray-300 text-center align-middle"
          >
            青年员工培养
          </td>
          <td
            rowSpan={3}
            className="border border-gray-300 text-center align-middle"
          >
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
          <td className="border border-gray-300 text-center">管理机制</td>
          <td className="border border-gray-300 text-center">创新创效</td>
          <td className="border border-gray-300 text-center">工会</td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="sapce-y-2">
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
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">管理机制</td>
          <td className="border border-gray-300 text-center">考核激励</td>
          <td className="border border-gray-300 text-center">企管部</td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="sapce-y-2">
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

export default Peidianyunjian;
