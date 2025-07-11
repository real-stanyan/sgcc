const Biandianxueshi = () => (
  <div className="overflow-x-auto w-full">
    <h1 className="text-center pb-5 font-black text-3xl">
      变电修试专业标杆班组建设成效评价标准
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
            设备部、安监部
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组所辖区域内生产准备和验收、巡视作业、检测维护、检修作业、缺陷隐患管控、故障应急、日常管理等核心业务能力实施类型应全类型覆盖。（各类业务定义参见《国网江苏省电力有限公司打造一线核心标杆班组管理办法》中附件1《地市供电公司、国网江苏超高压公司标杆班组建设目录及自主实施业务范围》每条次“业务类别”），年度内所在班组确无相关业务类型工作计划安排的，可通过培训能力认证替代。
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
            <li>
              1.全量参与班组所辖站所、设备相关的可研、初设、施工图等方案的评审，独立完成相关专业技术要点核准、反措要求落实、专业意见编制等工作。
            </li>
            <li>
              2.全量开展班组所辖变电站的新建、改（扩）建工程的一次主设备验收、试验旁站、技术资料审核、归档等工作。
            </li>
            <li>
              3.开展班组所辖范围内油浸式变压器（电抗器）、电压互感器、电流互感器、避雷器A、B类检修及试验工作，自主实施比例不低于所辖范围内业务总量的30%。
            </li>
            <li>
              4.开展班组所辖范围内瓷柱式断路器、敞开式隔离开关、开关柜A、B类检修及试验工作，自主实施比例不低于所辖范围内业务总量的20%。
            </li>
            <li>
              5.开展设备消缺及故障处理标准化作业（方案-组织-消缺-资料归档），自主实施比例不低于对应类型检修工作要求；
            </li>
            <li>
              6.自主开展所辖设备设施隐患排查和管控措施落实；按要求定期自主实施设备本体、专业巡视等工作。
            </li>
            <li>
              7.全量自主开展设备状态评价、工作计划编制、工器具日常管理、台账资料整理等日常工作。
            </li>
          </td>
          <td className="border border-gray-300">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.开展班组所辖范围内油浸式变压器（电抗器）、电压互感器、电流互感器、避雷器A、B类检修、试验等工作，自主实施比例不低于所辖范围内业务总量的30%，每增加5%加1分。
              </li>
              <li>
                2.开展班组所辖范围内瓷柱式断路器、敞开式隔离开关、开关柜A、B类检修、试验等工作，自主实施比例不低于所辖范围内业务总量的20%，每增加5%加1分。
                以上单项加分不超过5分，总加分不超过10分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
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
          <td className="border border-gray-300">
            远程督查、现场检查、资料核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.年度内未发生省生产管控中心通报的重大问题。</li>
              <li>2.设备修后2年内不得发生因检修质量问题造成设备再次停电。</li>
            </ul>
          </td>
          <td className="border border-gray-300">
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
            标杆班组员工能力覆盖率应达80%以上（能力覆盖率：标杆班组员工具备能力总数/(标杆班组总人数*业务类型)（不含当年入职的新员工），2年内自主实施该类型业务3次及以上，则认为具备此类型业务能力，若2年内无该项业务或业务次数少可采取培训替代）。
          </td>
          <td className="border border-gray-300">自主举证，现场核查</td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            总结提炼新工艺工法、技术监督意见、发明专利并经专业部门认可下发的每项加2分，不超过10分。
          </td>
          <td className="border border-gray-300">自主举证，现场核查</td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
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
          <td className="border border-gray-300">自主举证，现场核查</td>
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
          <td className="border border-gray-300">自主举证，现场核查</td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">技能提升</td>
          <td className="border border-gray-300 text-left p-2">
            参加国网公司级技能竞赛，受表彰，获得第1、2、3名，分别加3、2、1分，获得第4名及以下，加0.5分；参加省公司技能竞赛，受表彰，获得第1、2、3名，分别加2、1、0.5分。不超过10分。
          </td>
          <td className="border border-gray-300">自主举证，现场核查</td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">管理机制</td>
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
          <td className="border border-gray-300">自主举证，现场核查</td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高10分</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">管理机制</td>
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
          <td className="border border-gray-300">自主举证，现场核查</td>
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

export default Biandianxueshi;
