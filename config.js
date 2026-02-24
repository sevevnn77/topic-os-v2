/**
 * TopicOS - 话题纵深框架系统
 * 
 * 设计原则：
 * 1. 纯框架，零预置内容
 * 2. 只定义模块结构和字段类型
 * 3. 每个模块都是空白模板，等待填充
 * 4. 换话题 = 填表格，不是改代码
 */

const TOPICOS_SCHEMA = {
  // 系统信息
  system: {
    name: "TopicOS",
    version: "2.0.0",
    description: "话题纵深型专题页框架系统"
  },

  // ========== 模块定义（纯结构，无内容）==========
  modules: {
    
    // 模块1: 话题锚点
    anchor: {
      id: "anchor",
      name: "话题锚点",
      description: "定义话题边界，建立认知起点",
      icon: "⚓",
      enabled: true,
      
      fields: [
        { key: "title", label: "话题标题", type: "text", placeholder: "输入话题名称", required: true },
        { key: "subtitle", label: "副标题", type: "text", placeholder: "一句话概括话题核心", required: false },
        { key: "definition", label: "定义说明", type: "textarea", placeholder: "清晰界定话题范围和内涵", required: true },
        { key: "stage", label: "发展阶段", type: "select", options: ["萌芽期", "升温期", "爆发期", "成熟期", "分化期"], required: true },
        { key: "tags", label: "话题标签", type: "tags", placeholder: "添加相关标签，用逗号分隔" }
      ]
    },

    // 模块2: 关键变量（核心分析单元）
    variables: {
      id: "variables",
      name: "关键变量",
      description: "拆解话题的核心影响因素",
      icon: "🔬",
      enabled: true,
      
      // 这是一个"列表型"模块，可以添加多个变量
      isList: true,
      itemName: "变量",
      
      itemFields: [
        { key: "title", label: "变量名称", type: "text", placeholder: "如：政策变化、技术突破、用户需求", required: true },
        { key: "description", label: "变量说明", type: "textarea", placeholder: "解释这个变量为什么重要", required: true },
        { key: "evidence", label: "支撑证据", type: "list", 
          itemFields: [
            { key: "label", label: "标签", type: "text", placeholder: "如：2023年数据" },
            { key: "value", label: "数值/事实", type: "text", placeholder: "如：增长300%" },
            { key: "note", label: "备注", type: "text", placeholder: "补充说明" }
          ]
        },
        { key: "question", label: "核心问题", type: "textarea", placeholder: "这个变量带来的关键疑问是什么？" },
        { key: "insight", label: "洞察判断", type: "textarea", placeholder: "基于这个变量的趋势判断" },
        { key: "impact", label: "影响程度", type: "select", options: ["高", "中", "低"] }
      ]
    },

    // 模块3: 演化时间线
    timeline: {
      id: "timeline",
      name: "演化时间线",
      description: "记录话题发展的关键节点",
      icon: "📅",
      enabled: true,
      
      isList: true,
      itemName: "事件",
      
      itemFields: [
        { key: "date", label: "时间", type: "text", placeholder: "如：2024年3月", required: true },
        { key: "title", label: "事件标题", type: "text", placeholder: "发生了什么？", required: true },
        { key: "type", label: "事件类型", type: "select", options: ["里程碑", "转折点", "政策", "产品", "市场", "其他"], required: true },
        { key: "description", label: "事件描述", type: "textarea", placeholder: "详细说明这个事件的影响" },
        { key: "isKey", label: "关键节点", type: "boolean", description: "这是否是一个转折点？" }
      ]
    },

    // 模块4: 信号监测
    signals: {
      id: "signals",
      name: "信号监测",
      description: "追踪关键指标的变化",
      icon: "📡",
      enabled: true,
      
      isList: true,
      itemName: "信号",
      
      itemFields: [
        { key: "name", label: "信号名称", type: "text", placeholder: "如：市场规模、用户满意度", required: true },
        { key: "currentValue", label: "当前值", type: "text", placeholder: "如：100亿、85%", required: true },
        { key: "trend", label: "趋势", type: "select", options: ["上升", "下降", "稳定", "波动"], required: true },
        { key: "significance", label: "重要性", type: "select", options: ["关键", "重要", "一般"], required: true },
        { key: "interpretation", label: "解读", type: "textarea", placeholder: "这个信号意味着什么？" }
      ]
    },

    // 模块5: 观点分歧
    debate: {
      id: "debate",
      name: "观点分歧",
      description: "呈现话题中的争议和不同立场",
      icon: "⚖️",
      enabled: true,
      
      fields: [
        { key: "topic", label: "讨论主题", type: "text", placeholder: "核心争议点是什么？", required: true }
      ],
      
      isList: true,
      itemName: "观点方",
      minItems: 2,
      maxItems: 4,
      
      itemFields: [
        { key: "position", label: "立场名称", type: "text", placeholder: "如：乐观派、谨慎派", required: true },
        { key: "coreView", label: "核心观点", type: "textarea", placeholder: "这个立场的核心主张", required: true },
        { key: "arguments", label: "主要论据", type: "list", itemType: "text", placeholder: "添加论据" },
        { key: "representatives", label: "代表方", type: "text", placeholder: "支持这一观点的典型代表" }
      ]
    },

    // 模块6: 深度内容
    contents: {
      id: "contents",
      name: "深度内容",
      description: "聚合相关的分析文章和资料",
      icon: "📚",
      enabled: true,
      
      fields: [
        { key: "categories", label: "内容分类", type: "tags", placeholder: "如：深度分析、数据报告、专家观点" }
      ],
      
      isList: true,
      itemName: "内容",
      
      itemFields: [
        { key: "title", label: "标题", type: "text", required: true },
        { key: "source", label: "来源", type: "text", placeholder: "作者或机构" },
        { key: "date", label: "日期", type: "text" },
        { key: "category", label: "分类", type: "text" },
        { key: "url", label: "链接", type: "text", placeholder: "原文链接" },
        { key: "isFeatured", label: "精选", type: "boolean" }
      ]
    },

    // 模块7: 订阅（固定模块）
    subscription: {
      id: "subscription",
      name: "订阅更新",
      description: "关注话题获取更新",
      icon: "🔔",
      enabled: true,
      
      fields: [
        { key: "followerCount", label: "关注人数", type: "number", default: 0 },
        { key: "updateCount", label: "本周更新", type: "number", default: 0 }
      ]
    }
  },

  // ========== 示例配置（9系新能源汽车 - 仅作演示）==========
  // 实际使用时，这个对象会被替换为新的专题数据
  example: {
    
    anchor: {
      title: "9系新能源汽车",
      subtitle: "高端市场的心智争夺战",
      definition: "以'9'命名的旗舰级新能源车型，代表品牌天花板，是车企进军高端市场的战略武器",
      stage: "爆发期",
      tags: ["新能源汽车", "高端市场", "品牌战略"]
    },

    variables: [
      {
        title: "命名稀缺性稀释",
        description: "9系从独特标识变成标配命名，稀缺性快速消失",
        evidence: [
          { label: "2023年", value: "1款", note: "理想L9独占" },
          { label: "2024年", value: "5款+", note: "多品牌跟进" },
          { label: "2025年", value: "10款+", note: "成为标配" }
        ],
        question: "当所有品牌都有9系，消费者如何区分？",
        insight: "命名本身已无法支撑高端定位",
        impact: "高"
      },
      {
        title: "技术配置同质化",
        description: "高端配置快速下沉，30万与20万车型体验差距缩小",
        evidence: [
          { label: "智驾下沉", value: "15万级", note: "高速NOA普及" },
          { label: "动力下放", value: "20万级", note: "双电机成标配" }
        ],
        question: "配置趋同时，高端溢价如何维持？",
        insight: "智能化从差异化变成基础门槛",
        impact: "高"
      }
    ],

    timeline: [
      { date: "2023年", title: "理想L9上市", type: "里程碑", description: "9系命名首次成为旗舰代名词", isKey: true },
      { date: "2024年", title: "9系扎堆", type: "市场", description: "多个品牌推出9系车型", isKey: true },
      { date: "2026年", title: "三款新9系亮相", type: "产品", description: "蔚来、智界、大众同批发布", isKey: false }
    ],

    signals: [
      { name: "高端市场渗透率", currentValue: "30倍+", trend: "上升", significance: "关键", interpretation: "30-40万价格带6年增长30倍" },
      { name: "9系车型数量", currentValue: "10款+", trend: "上升", significance: "重要", interpretation: "命名稀缺性快速稀释" }
    ],

    debate: {
      topic: "9系之战谁能胜出？",
      sides: [
        { position: "科技派", coreView: "智能化体验是决胜关键", arguments: ["智驾能力差异", "座舱生态粘性"], representatives: "华为系、新势力" },
        { position: "品牌派", coreView: "不可替代的稀缺性才是护城河", arguments: ["服务网络壁垒", "品牌认知沉淀"], representatives: "蔚来、传统豪华品牌" }
      ]
    },

    contents: {
      categories: ["深度分析", "数据报告", "专家观点"],
      items: [
        { title: "9系集中登场，车企开年亮剑", source: "虎嗅汽车", date: "2026-02-24", category: "深度分析", url: "#", isFeatured: true }
      ]
    },

    subscription: {
      followerCount: 2847,
      updateCount: 3
    }
  }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TOPICOS_SCHEMA;
}
