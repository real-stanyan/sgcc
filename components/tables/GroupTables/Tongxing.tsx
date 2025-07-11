const Tongxing = () => (
  <div className="overflow-x-auto w-full">
    <h1 className="text-center pb-5 font-black text-3xl">
      通信专业标杆班组建设成效评价标准
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
            rowSpan={6}
            className="border border-gray-300 text-center align-middle"
          >
            业务实施
          </td>
          <td className="border border-gray-300 text-center">业务类型覆盖率</td>
          <td rowSpan={6} className="border border-gray-300 text-center">
            调控中心
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组所辖范围内生产准备和验收、设备改造及大修、运行维护、现场巡视作业、
            缺陷隐患管控及故障应急处置、日常管理、通信服务工作、其他业务等核心业务能力实施类型应全类型覆盖。（各类业务定义参见《国网江苏省电力有限公司打造一线核心标杆班组管理办法》中附件1《地市供电公司、国网江苏超高压公司标杆班组建设目录及自主实施业务范围》每条次“业务类别”，其中不包含
            “核心业务系统自主运维”类），年度内所在班组确无相关业务类型工作计划安排的，可通过选择所辖其他站点同类型业务或培训能力认证替代。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场核查、网管检查
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
                1.500kV及以上变电站、市公司中心站内传输、交换、电源、电视电话会议、应急通信设备等设备安装调试、板卡模块更换、数据配置等工作。自主实施比例不低于所辖范围内设备改造及大修业务总量的50%。
              </li>
              <li>
                2.所辖范围内的传输网管、配电通信网设备网管操作；网络运行情况分析及方式优化；500kV及以上变电站、市公司中心站内通信设备检查维护及日常检修等工作。自主实施比例不低于所辖范围内运行维护业务总量的50%。
              </li>
              <li>
                3.500kV及以上变电站、市公司中心站内现场巡视作业；500kV及以上变电站、市公司中心站内线缆识牌、OPGW/ADSS光缆引下线等巡视作业；500kV及以上变电站、市公司中心站内现场巡视作业统计分析等现场巡视工作。自主实施比例不低于所辖范围内现场巡视业务总量的50%。
              </li>
              <li>
                4.500kV及以上变电站、市公司中心站的隐患排查、现场故障处置、应急通信（如卫星电话测试、应急电源等）等工作。自主实施比例不低于所辖范围内该类设备故障隐患管控及应急处理业务总量的50%。
              </li>
              <li>
                5.所辖范围内的TMS2.0、传输网管、配电通信网网管、光缆一张图、交换设备网管以及个性化光缆管理系统等专业网管及系统的数据维护、通信设备及线路（引下及联络光缆）运行状态评价分析、通信运行维护资料、工器具及备品备件管理等工作。自主实施比例不低于所辖范围内该类设备日常管理业务总量的50%。
              </li>
              <li>
                6.一类重要电视电话会议的调试及保障，调度、行政电话业务开通、资源分配等工作。自主实施比例不低于所辖范围内通信服务业务总量的50%。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场核查、网管检查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.500kV及以上变电站、市公司中心站内传输、交换、电源、电视电话会议、应急通信设备等设备安装调试、板卡模块更换、数据配置等工作。自主实施比例不低于50%，每增加10%加1分，不超过3分。
              </li>
              <li>
                2.传输网管、配电通信网设备网管操作；网络运行情况分析及方式优化；500kV及以上变电站、市公司中心站内通信设备检查维护及日常检修等工作。自主实施比例不低于50%，每增加10%加1分，不超过3分。
              </li>
              <li>
                3.500kV及以上变电站、市公司中心站的隐患排查、现场故障处置、应急通信（如卫星电话测试、应急电源等）等工作。自主实施比例不低于50%，每增加10%加1分，不超过3分。
              </li>
              <li>
                4.TMS2.0、传输网管、配电通信网网管、光缆一张图、交换设备网管以及个性化光缆管理系统等专业网管及系统的数据维护工作。自主实施比例不低于50%，每增加10%加1分，不超过3分。
              </li>
              <li>
                5.协助开展通信项目储备、前期评审；通信项目过程管控、质量检查、安全管理；项目验收及通道开通、启动保障、资料移交、台账录入。全流程参与至少一项基建项目、通信技改、大修项目、独立二次项目等工程项目，每项加1分，不超过3分。
              </li>
              <li>
                6.协助开展至少一次通信（滚动）规划编制；协助开展至少一次通信培训；协助开展至少一次通信技术监督管理。每项加1分，不超过3分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场核查、网管检查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高18分</td>
        </tr>
        <tr>
          <td rowSpan={2} className="border border-gray-300 text-center">
            业务实施质量
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.未发生通信系统故障导致500千伏及以上线路两套主保护或安控装置业务通道同时中断，或重要核心站点通信光路全部中断等安全事件。
              </li>
              <li>2.未有被总部/省公司通报的严重违章事件。</li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">
            远程督查、现场核查、网管检查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            总结撰写典型管理经验做法、重点专项报告、实施建设方案等，经专业部门认可下发的，应在标杆班组评价中优先考虑加分，纳入国网、华东、省公司下发推广应用材料每项分别加3、2、1分，不超过10分。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">
            业务自主实施能力回归
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组员工能力覆盖率应达60%以上（能力覆盖率：标杆班组员工具备能力总数/(标杆班组总人数*业务类型)（不含当年入职的新员工），1年内自主实施该类型业务1次及以上，则认为具备此类型业务能力）。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证、远程督查、现场核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
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
            自主举证、远程督查、现场核查、网管检查
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

export default Tongxing;
