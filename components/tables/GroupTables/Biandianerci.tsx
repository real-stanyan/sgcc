const Biandianerci = () => (
  <div className="overflow-x-auto w-full">
    <h1 className="text-center pb-5 font-black text-3xl">
      变电二次检修专业标杆班组建设成效评价标准
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
            rowSpan={5}
            className="border border-gray-300 text-center align-middle"
          >
            业务实施
          </td>
          <td className="border border-gray-300 text-center">业务类型覆盖率</td>
          <td rowSpan={5} className="border border-gray-300 text-center">
            调控中心、安监部
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组所辖区域内专业巡视、设备验收、设备校验、事故抢险、缺陷处理、设备改造（大修）、安全管控等核心业务能力实施类型应全类型覆盖。（各类业务定义参见《国网江苏省电力有限公司打造一线核心标杆班组管理办法》中附件1《地市供电公司、国网江苏超高压公司标杆班组建设目录及自主实施业务范围》每条次“业务类别”），年度内所在班组确无相关业务类型工作计划安排的，可通过培训能力认证替代。
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
              <li>1.全量自主实施开展全年专业巡视工作。</li>
              <li>2.全量自主实施开展全年设备验收工作。</li>
              <li>3.全量自主实施开展全年保护设备校验、自动化数据校核工作。</li>
              <li>4.全量开展低压用户计量装置现场检测及差错调查处理工作；</li>
              <li>5.全量自主实施开展全年缺陷处理工作。</li>
              <li>6.自主实施次数占全年设备改造（大修）次数比例不低于10%。</li>
              <li>
                7.全量自主实施开展二次作业风险辨识定级、队伍资质审查及作业风险安全管控工作。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.查阅全年巡视工作计划及PMS 3.0系统中专业巡视工作票；</li>
              <li>2.查阅全年设备验收工作计划及相应验收标准化作业指导卡；</li>
              <li>3.查阅PMS 3.0系统中设备校验工作票和二次安措票；</li>
              <li>
                4.查阅PMS
                3.0系统中工作票或安全风险管控平台的事故紧急抢修单（或工作票）、事故分析报告等；
              </li>
              <li>5.查阅PMS 3.0系统中缺陷处理工作票和缺陷记录及完成情况；</li>
              <li>
                6.查阅设计交底、图纸审核记录和施工三措；查阅PMS
                3.0系统中设备改造（大修）工作票、二次安措票、带负荷试验记录等；
              </li>
              <li>
                7.查阅继电保护作业风险管控系统二次作业上报、安全风险管控平台安全交底和作业计划。
              </li>
              <li>8.查阅调控云台账、OMS系统自动化检修票。</li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            年度内，自主实施次数占设备改造（大修）次数比例大于等于20%，得10分；比例大于等于17.5%且小于20%，得8分；比例大于等于15%且小于17.5%，得6分；比例大于等于12.5%且小于15%，得4分；比例小于12.5%，不得分。不超过10分。
          </td>
          <td className="border border-gray-300 text-left p-2">
            查阅设计交底、图纸审核记录和施工三措；查阅PMS
            3.0系统中设备改造（大修）工作票、二次安措票、带负荷试验记录等。
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td rowSpan={2} className="border border-gray-300 text-center">
            业务实施质量
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.专业巡视记录卡（表）内容完整，问题记录无缺漏；对发现的问题及时制定设备异常及消缺处置方案。
              </li>
              <li>
                2.验收标准化作业指导卡、验收问题整改记录表齐全；验收问题及整改记录完整，无缺漏；新、改、扩建工程验收报告齐全。
              </li>
              <li>3.二次安措票、校验报告准确、完整。</li>
              <li>4.事故分析报告内容全面，动作报文、故障录波等内容无缺失。</li>
              <li>
                5.统分系统缺陷记录必填信息录入完整、准确，与调度日志缺陷记录一致。
              </li>
              <li>
                6.施工三措、二次安措票、现场勘察记录及带负荷试验记录（若有）齐全；施工三措编制、审核规范，二次安措票执行正确，现场勘察记录、带负荷试验记录（若有）主要内容准确。
              </li>
              <li>
                7.二次作业风险辨识充分、风险定级准确，风险管控平台作业计划录入无遗漏。
              </li>
              <li>
                8.厂站自动化系统运行正常、网络架构和设备配置合理、图库/参数配置正确、功能配置完整。
              </li>
              <li>
                9.厂站自动化设备台账、网络拓扑、修试记录、图纸、配置文件、备份文件等完整、准确。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.查阅专业巡视记录卡（表）；</li>
              <li>2.查阅验收问题汇总整改表、工程验收报告；</li>
              <li>3.查阅设备校验报告及PMS 3.0系统中设备校验二次安措票；</li>
              <li>4.查阅事故分析报告；</li>
              <li>5.查阅PMS 3.0系统和调度日志的缺陷记录；</li>
              <li>
                6.查阅施工三措、现场勘察记录；查阅PMS
                3.0系统中设备改造（大修）工作票及二次安措票、带负荷试验记录等；
              </li>
              <li>
                7.查阅继电保护作业风险管控系统二次作业上报、安全风险管控平台作业计划。
              </li>
              <li>
                8.查阅现场图纸、设备配置、调控云台账、OMS系统自动化检修票。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            总结提炼新工艺工法、班组典型管理经验、撰写技术监督意见等，经上级专业部门认可的，应在标杆班组评价中优先考虑加分，每项加1分，不超过5分。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高5分</td>
        </tr>
        <tr>
          <td rowSpan={2} className="border border-gray-300 text-center">
            业务实施
          </td>
          <td rowSpan={2} className="border border-gray-300 text-center">
            业务自主实施能力回归
          </td>
          <td rowSpan={2} className="border border-gray-300 text-center">
            调控中心、安监部
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.具备能力并自主实施开展过设备专业巡视、特殊巡视工作的班组人员比例达100％（针对班组入职年限满2年员工）。
              </li>
              <li>
                2.具备能力并自主实施开展过二次设备验收工作的班组人员比例达100％（针对班组入职年限满5年员工）。
              </li>
              <li>
                3.具备能力并自主实施开展过继电保护（主变、线路、母线和其他保护）及安全自动装置校验、厂站自动化数据校核工作的班组人员比例达100％（针对班组入职年限满2年员工）。
              </li>
              <li>
                4.具备能力并自主实施开展过事故抢修单（或工作票）编制、变电站及电网事故分析、二次设备故障抢修作业、编制事故分析报告工作的班组人员比例达100％（针对班组入职年限满5年员工）。
              </li>
              <li>
                5.具备能力并自主实施开展过消缺工作票编制，继电保护和安全自动装置、厂站自动化装置及其辅助装置等装置本体、二次回路等缺陷分析及处理的班组人员比例达100％（针对班组入职年限满5年员工）。
              </li>
              <li>
                6.具备能力并自主实施开展过继电保护装置（主变、线路、母线和其他保护）、厂站自动化装置改造（大修），安全自动装置及故障录波器、保信子站等公用装置改造（大修）的班组人员比例不低于50％（针对班组入职年限满5年员工）。
              </li>
              <li>
                7.具备能力并自主实施开展过二次作业风险辨识、定级，作业队伍、人员现场核查和安全交底，风险管控平台线上作业计划录入的班组人员比例达100％（针对班组入职年限满2年员工）。
                有关说明：若班组员工入职年限无法满足上述年限要求可根据班组实际情况酌情调整。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.查阅PMS 3.0系统中专业巡视工作票和专业巡视记录卡（表）；</li>
              <li>2.查阅验收标准化作业指导卡和验收问题汇总整改记录表；</li>
              <li>3.查阅PMS 3.0系统中设备校验工作票、二次安措票；</li>
              <li>
                4.查阅PMS3.0系统中事故紧急抢修单（或工作票）和事故分析报告；
              </li>
              <li>5.查阅PMS 3.0系统中缺陷处理工作票和缺陷记录；</li>
              <li>
                6.查阅图纸审核签到记录和施工三措；查阅PMS
                3.0系统中设备改造（大修）工作票和二次安措票；
              </li>
              <li>
                7.查阅施工三措和二次安全措施票；查阅继电保护作业风险管控系统二次作业上报、安全风险管控平台安全交底和作业计划。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.具备能力并自主实施开展过继电保护装置（主变、线路、母线和其他保护）改造（大修）、厂站自动化装置改造（大修），安全自动装置及故障录波器、保信子站等公用装置改造（大修）的班组人员比例不低于60％，得3分；比例大于等于55％且小于60％，得2分；比例大于等于50％且小于55％，得1分。（针对班组入职年限满5年员工）
              </li>
              <li>
                2.厂站自动化技能等级评价高级工及以上人员占比大于等于40%，得3分；厂站自动化技能等级评价高级工及以上占比大于等于30%且小于40%，得2分；厂站自动化技能等级评价高级工及以上占比大于等于20%且小于30%，得1分；厂站自动化技能等级评价高级工及以上占比小于20%，不得分。
                此项加分总分不超过5分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-left p-2">
            查阅图纸审核签到记录和施工三措；查阅PMS
            3.0系统中设备改造（大修）工作票和二次安措票。
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
                2.
                每增加1名技师（二级）加0.5分，高级技师（一级）加一分；增加1名省公司级人才加1分，增加1名省部级人才加3分，最高不超过4分。
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
                2.
                在完成标杆班组年度自主实施任务、工作业绩达标的情况下，标杆班组骨干员工绩效工资收入水平是否高于其他班组同层级人员。
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

export default Biandianerci;
