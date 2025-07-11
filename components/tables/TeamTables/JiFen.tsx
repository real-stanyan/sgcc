const JiFen = () => (
  <div className="overflow-x-auto w-full">
    <table className="table-auto w-full border-collapse border border-gray-300">
      <colgroup>
        <col style={{ width: "15%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "25%" }} />
        <col style={{ width: "20%" }} />
      </colgroup>
      <thead>
        <tr className="bg-gray-100 border-t-4 border-[#12a1a0] h-[60px]">
          {[
            "评价维度",
            "最高限值",
            "评价分项",
            "积分说明",
            "积分标准",
            "备注",
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
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              whiteSpace: "nowrap",
            }}
          >
            管理积分（先自评，专业管理部门核实、人资部确认）
          </td>
          <td rowSpan={4} className="border border-gray-300 text-center">
            40
          </td>
          <td rowSpan={4} className="border border-gray-300 text-center">
            活跃度
          </td>
          <td className="border border-gray-300 text-center">运行状态</td>
          <td className="border border-gray-300">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[50%] flex justify-between items-center">
                <span>优秀</span>
                <span>10</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>良好</span>
                <span>6</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>一般</span>
                <span>3</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>较差</span>
                <span>0</span>
              </div>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            课题申报是否及时，动态淘汰机制是否执行到位，过程材料是否完备等
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">活动表现</td>
          <td className="border border-gray-300">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[50%] flex justify-between items-center">
                <span>优秀</span>
                <span>10</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>良好</span>
                <span>6</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>一般</span>
                <span>3</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>较差</span>
                <span>0</span>
              </div>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            各类团队活动、团队工作例会是否有序开展，团队成员参加公司相关活动的积极程度等
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">宣传推广</td>
          <td className="border border-gray-300">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[50%] flex justify-between items-center">
                <span>优秀</span>
                <span>10</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>良好</span>
                <span>6</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>一般</span>
                <span>3</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>较差</span>
                <span>0</span>
              </div>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            团队成果推广情况，相关宣传展示效果等
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">团队培养</td>
          <td className="border border-gray-300">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[50%] flex justify-between items-center">
                <span>优秀</span>
                <span>10</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>良好</span>
                <span>6</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>一般</span>
                <span>3</span>
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <span>较差</span>
                <span>0</span>
              </div>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            发挥“传、帮、带”作用、师徒传承作用效果等
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">40</td>
          <td className="border border-gray-300 text-center">绩效贡献</td>
          <td className="border border-gray-300 text-center">
            经认定对公司绩效 有突出贡献的业绩
          </td>
          <td className="border border-gray-300">
            <div className="w-[50%] flex justify-between items-center mx-auto">
              <span>上限</span>
              <span>40</span>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            团队成果是否对公司绩效有突出贡献，每项1-10分（与奖项重复就高）
          </td>
        </tr>
        <tr>
          <td
            rowSpan={5}
            className="border border-gray-300 text-center align-middle"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              whiteSpace: "nowrap",
            }}
          >
            积分成果
          </td>
          <td className="border border-gray-300 text-center">20</td>
          <td className="border border-gray-300 text-center">个人成长</td>
          <td className="border border-gray-300 text-center">
            经认定有突出进步、 获专业认可等情况的个人
          </td>
          <td className="border border-gray-300">
            <div className="w-[50%] flex justify-between items-center mx-auto">
              <span>上限</span>
              <span>20</span>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            团队中是否有表现突出个人等，每人次1-5分
          </td>
        </tr>
        <tr>
          <td rowSpan={4} className="border border-gray-300 text-center">
            附加分上不封顶 按次计分
          </td>
          <td className="border border-gray-300 text-center">科技类获奖</td>
          <td className="border border-gray-300 text-center">
            团队成果获得 非科技类奖项
          </td>
          <td className="border border-gray-300">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[80%] flex justify-between items-center text-md">
                <span>国家级及以上</span>
                <span>100</span>
              </div>
              <div className="w-[80%] flex justify-between items-center text-sm">
                <span>省部级（国网公司级、行业级）</span>
                <span>50</span>
              </div>
              <div className="w-[80%] flex justify-between items-center text-sm">
                <span>市级（省公司级、省学会级）</span>
                <span>15</span>
              </div>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            一等奖系数1，二等奖0.7，其他0.5
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">非科技类获奖</td>
          <td className="border border-gray-300 text-center">
            团队获得 发明专利
          </td>
          <td className="border border-gray-300">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[80%] flex justify-between items-center text-md">
                <span>国家级及以上</span>
                <span>100</span>
              </div>
              <div className="w-[80%] flex justify-between items-center text-sm">
                <span>省部级（国网公司级、行业级）</span>
                <span>50</span>
              </div>
              <div className="w-[80%] flex justify-between items-center text-sm">
                <span>市级（省公司级、省学会级）</span>
                <span>15</span>
              </div>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            一等奖系数1，二等奖0.7，其他0.5
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">发明专利</td>
          <td className="border border-gray-300 text-center">
            团队获得 发明专利
          </td>
          <td className="border border-gray-300">
            <div className="w-[50%] flex justify-between items-center mx-auto">
              <span>每项</span>
              <span>3</span>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            专利第一发明人是团队成员且专利与团队研究方向相关
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 text-center">核心期刊论文</td>
          <td className="border border-gray-300 text-center">
            团队发表核 心期刊论文
          </td>
          <td className="border border-gray-300">
            <div className="w-[50%] flex justify-between items-center mx-auto">
              <span>每项</span>
              <span>3</span>
            </div>
          </td>
          <td className="border border-gray-300 text-center">
            论文一作是团队成员且论文与团队研究方向相关
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default JiFen;
