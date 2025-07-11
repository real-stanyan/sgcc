const Shuzihua = () => (
  <div className="overflow-x-auto w-full">
    <h1 className="text-center pb-5 font-black text-3xl">
      数字化标杆班组建设成效评价标准
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
            rowSpan={2}
            className="border border-gray-300 text-center align-middle"
          >
            业务实施
          </td>
          <td className="border border-gray-300 text-center">业务类型覆盖率</td>
          <td rowSpan={2} className="border border-gray-300 text-center">
            数字化部
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组所辖区域内网络安全防护、基础设施运维、系统深化应用、采集感知装置运营、数据质量治理、数据分析服务等核心业务能力实施类型应全类型覆盖。（各类业务内容参见《国网江苏省电力有限公司关于加强地市信通公司数字化核心班组建设的通知》中“三、工作措施（1）强化核心能力提升”对地市信通公司的业务开展要求），年度内所在班组确无相关业务类型工作计划安排的，可通过培训能力认证替代。
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.查阅网络安全日常监测记录、专项检查通报/隐患排查单、网络安全保障值班表。
              </li>
              <li>
                2.查阅基础设施巡检记录；查阅业务系统检修计划/工作票/工作任务单。
              </li>
              <li>
                3.查阅省侧平台工具培训记录及推广实施台账、数字化项目评审相关记录；查阅业务系统需求记录、业务系统应用评价报告等。
              </li>
              <li>
                4.查阅采集感知装置物联网卡审核及发放记录/入网审批记录；查阅采集感知装置运行监测记录；查阅采集感知装置运营通报。
              </li>
              <li>
                5.查阅数据中台运营记录、数据质量治理流转记录、数据质量运营通报。
              </li>
              <li>
                6.查阅数据表申请记录/开发记录；查阅数据应用开发报告/使用说明；现场检查。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">自主实施业务量</td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.全量参与重大网络安全保障。</li>
              <li>2.全量参与信息机房专业巡检。</li>
              <li>
                3.年度内组织或支撑省侧平台工具培训达4次及以上；年度内编制业务系统应用通报2期及以上。
              </li>
              <li>
                4.全量负责物联网卡/数字证书发放和入网审核；年度内编制采集感知装置运营通报2期及以上。
              </li>
              <li>
                5.年度内完成20个及以上数据中台账号权限运维；年度内审核/授权50张以上数据表。
              </li>
              <li>
                6.年度内作为主要部门协同业务部门参与自主开发内部数据应用2项及以上。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.查阅网络安全日常监测记录、专项检查通报/隐患排查单、网络安全保障值班表。
              </li>
              <li>
                2.查阅基础设施巡检记录；查阅业务系统检修计划/工作票/工作任务单。
              </li>
              <li>
                3.查阅省侧平台工具培训记录及推广实施台账、数字化项目评审相关记录；查阅平台系统研发记录、业务系统应用评价报告等。
              </li>
              <li>
                4.查阅采集感知装置物联网卡审核及发放记录/入网审批记录；查阅采集感知装置运行监测记录；查阅采集感知装置运营通报。
              </li>
              <li>5.查阅数据中台记录、数据治理工具记录、数据质量监测通报。</li>
              <li>
                6.查阅自主开发应用相关记录、查阅对外服务开发相关记录；现场检查。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td
            rowSpan={5}
            className="border border-gray-300 text-center align-middle"
          >
            业务实施
          </td>
          <td className="border border-gray-300 text-center align-middle">
            自主实施业务量
          </td>
          <td
            rowSpan={5}
            className="border border-gray-300 text-center align-middle"
          >
            数字化部
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.年度内参与网络安全检查次数达6次得1分，达8次及以上得2分。
              </li>
              <li>
                2.年度内关键业务系统核心操作自主实施比例达所辖范围内业务总量的80%及以上得1分，达100%得2分。
              </li>
              <li>3.年度内数字化项目评审参与率达50%及以上，得1分。</li>
              <li>4.年度内开展人工智能创新应用并取得成效，得1分。</li>
              <li>
                5.年度内常态监测采集感知装置数达三类得1分，达七类及以上得2分。
              </li>
              <li>6.年度内发起或流转10个及以上数据治理工单，得1分。</li>
              <li>7.年度内发布数据质量监测通报达4期及以上，得1分。</li>
              <li>
                8.年度内参与对外服务数据分析应用开发1项，得1分，参与2项及以上得2分。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.查阅网络安全日常监测记录、专项检查通报/隐患排查单、网络安全保障值班表。
              </li>
              <li>
                2.查阅基础设施巡检记录；查阅业务系统检修计划/工作票/工作任务单。
              </li>
              <li>
                3.查阅省侧平台工具培训记录及推广实施台账、数字化项目评审相关记录；查阅平台系统研发记录、业务系统应用评价报告等。
              </li>
              <li>
                4.查阅采集感知装置物联网卡审核及发放记录/入网审批记录；查阅采集感知装置运行监测记录；查阅采集感知装置运营通报。
              </li>
              <li>5.查阅数据中台记录、数据治理工具记录、数据质量监测通报。</li>
              <li>
                6.查阅自主开发应用相关记录、查阅对外服务开发相关记录；现场检查。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td
            rowSpan={2}
            className="border border-gray-300 text-center align-middle"
          >
            业务实施质量
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>
                1.年度内未发生因班组责任导致的10万条及以上业务数据的泄露、丢失事件；年度内因班组责任发生弱口令、远控软件、违规外联等基础性安全问题不多于6个。
              </li>
              <li>
                2.年度内未发生因班组责任导致的八级及以上信息安全事件；年度内发生因班组原因导致的信息系统安全事件不超过6起.
              </li>
              <li>
                3.年度内发生数字化项目不符合公司技术路线要求或存在其他不规范问题不多于4个；年度内发生地市自建应用系统存在使用频次低、资源分配不合理等问题不多于4个。
              </li>
              <li>
                4.年度内纳入常态监测的采集感知装置的平均在线率同比不下降；年度内数据质量异常时长超过30天且应发现未发现的终端数目不多于400个。
              </li>
              <li>
                5.年度内发生数据中台数据表审核/授权超过5个工作日未完成的事件不超过20起；年度内基础数据质量问题治理率不低于80%。
              </li>
              <li>6.年度内自主开发数据分析应用，登录用户数达到500人次。</li>
            </ul>
          </td>
          <td className="border border-gray-300 text-left p-2">
            <ul className="space-y-2">
              <li>1.查阅公司网络安全运营情况通报。</li>
              <li>2.调阅公司信息系统缺陷隐患情况记录。</li>
              <li>
                3.查阅数字化项目管控系统及电网数字化项目规范管理检查问题清单；现场检查。
              </li>
              <li>4.查阅采集感知装置运营情况通报；现场检查。</li>
              <li>
                5.查阅数据中台相关记录、数据治理相关记录、数据质量运营监测通报；现场检查。
              </li>
              <li>
                6.查阅自主开发应用后台访问数据、查阅对外服务调用后台数据。
              </li>
            </ul>
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            对于获得专业部门认可的典型经验、上级单位表彰及发明专利等成果，应在标杆班组评价中予以优先考虑并给予加分，每项加1分，累计不超过5分。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高5分</td>
        </tr>
        <tr>
          <td
            rowSpan={2}
            className="border border-gray-300 text-center align-middle"
          >
            业务自主实施能力回归
          </td>
          <td className="border border-gray-300 text-left p-2">
            标杆班组员工能力覆盖率应达30%以上（能力覆盖率：标杆班组员工具备能力总数/(标杆班组总人数*业务类型)（不含当年入职的新员工），1年内自主实施该类型业务3次及以上，则认为具备此类型业务能力）
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">达标制</td>
          <td className="border border-gray-300 text-center">已达标/未达标</td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-left p-2">
            标杆班组员工能力覆盖率超过50%，每增加10%，加1分，不超过3分。
          </td>
          <td className="border border-gray-300 text-center">
            自主举证，现场核查
          </td>
          <td className="border border-gray-300 text-center">加分制</td>
          <td className="border border-gray-300 text-center">最高3分</td>
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
          <td
            rowSpan={2}
            className="border border-gray-300 text-center align-middle"
          >
            管理机制
          </td>
          <td className="border border-gray-300 text-center align-middle">
            创新创效
          </td>
          <td className="border border-gray-300 text-center align-middle">
            工会
          </td>
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
          <td className="border border-gray-300 text-center align-middle">
            考核激励
          </td>
          <td className="border border-gray-300 text-center align-middle">
            企管部
          </td>
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

export default Shuzihua;
