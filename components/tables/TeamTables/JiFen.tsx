const JiFen = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full table-auto border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-center">评价维度</th>
            <th className="border px-2 py-1 text-center">最高限值</th>
            <th className="border px-2 py-1 text-center">评价分项</th>
            <th className="border px-2 py-1 text-center">积分说明</th>
            <th className="border px-2 py-1 text-center">积分标准</th>
            <th className="border px-2 py-1 text-center">备注</th>
          </tr>
        </thead>
        <tbody>
          {/* 管理积分 */}
          <tr>
            <td className="border px-2 py-1" rowSpan={4}>
              管理积分
              <br />
              <small>（先自评，专业管理部门核实、人资部确认）</small>
            </td>
            <td className="border px-2 py-1 text-center" rowSpan={4}>
              40
            </td>
            <td className="border px-2 py-1">活跃度</td>
            <td className="border px-2 py-1">运行状态</td>
            <td className="border px-2 py-1 whitespace-pre-line">
              优秀 10 良好 6 一般 3 较差 0
            </td>
            <td className="border px-2 py-1">
              课题申报是否及时，动态淘汰机制是否执行到位，过程材料是否完备等
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">活动表现</td>
            <td className="border px-2 py-1"></td>
            <td className="border px-2 py-1 whitespace-pre-line">
              优秀 10 良好 6 一般 3 较差 0
            </td>
            <td className="border px-2 py-1">
              各类团队活动、团队工作例会是否有序开展，团队成员参加公司相关活动的积极程度等
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">宣传推广</td>
            <td className="border px-2 py-1"></td>
            <td className="border px-2 py-1 whitespace-pre-line">
              优秀 10 良好 6 一般 3 较差 0
            </td>
            <td className="border px-2 py-1">
              团队成果推广情况，相关宣传展示效果等
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">团队培养</td>
            <td className="border px-2 py-1"></td>
            <td className="border px-2 py-1 whitespace-pre-line">
              优秀 10 良好 6 一般 3 较差 0
            </td>
            <td className="border px-2 py-1">
              发挥“传、帮、带”作用、师徒传承作用效果等
            </td>
          </tr>
          {/* 绩效贡献 */}
          <tr>
            <td className="border px-2 py-1">绩效贡献</td>
            <td className="border px-2 py-1 text-center">40</td>
            <td className="border px-2 py-1">绩效贡献</td>
            <td className="border px-2 py-1">
              经认定对公司绩效有突出贡献的业绩
            </td>
            <td className="border px-2 py-1 text-center">上限 40</td>
            <td className="border px-2 py-1">
              团队成果是否对公司绩效有突出贡献，每项1-10分（与奖项重复取高）
            </td>
          </tr>
          {/* 个人成长 */}
          <tr>
            <td className="border px-2 py-1">个人成长</td>
            <td className="border px-2 py-1 text-center">20</td>
            <td className="border px-2 py-1">个人成长</td>
            <td className="border px-2 py-1">
              经认定有突出进步、获专业认可等情况的个人
            </td>
            <td className="border px-2 py-1 text-center">上限 20</td>
            <td className="border px-2 py-1">
              团队中是否有表现突出的个人，每人次1-5分
            </td>
          </tr>
          {/* 成果积分 */}
          <tr>
            <td className="border px-2 py-1" rowSpan={4}>
              成果积分
              <br />
              <small>附加分，上不封顶，按次计分</small>
            </td>
            <td className="border px-2 py-1 text-center" rowSpan={4}>
              —
            </td>
            <td className="border px-2 py-1">科技类获奖</td>
            <td className="border px-2 py-1">团队成果获得科技类奖项</td>
            <td className="border px-2 py-1 whitespace-pre-line">
              国家级及以上 100
              <br />
              省部级 50
              <br />
              市级 15
            </td>
            <td className="border px-2 py-1">
              一等奖系数1，二等奖0.7，其他0.5
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">非科技类获奖</td>
            <td className="border px-2 py-1">团队成果获得非科技类奖项</td>
            <td className="border px-2 py-1 whitespace-pre-line">
              国家级及以上 20
              <br />
              省部级 15
              <br />
              市级 5
            </td>
            <td className="border px-2 py-1">
              一等奖系数1，二等奖0.7，其他0.5
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">发明专利</td>
            <td className="border px-2 py-1">团队获得发明专利</td>
            <td className="border px-2 py-1 text-center">每项 3</td>
            <td className="border px-2 py-1">
              专利第一发明人是团队成员且专利与团队研究方向相关
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">核心期刊论文</td>
            <td className="border px-2 py-1">团队发表核心期刊论文</td>
            <td className="border px-2 py-1 text-center">每篇 2</td>
            <td className="border px-2 py-1">
              论文第一作者是团队成员且论文与团队研究方向相关
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JiFen;
