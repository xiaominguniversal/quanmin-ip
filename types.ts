export interface RawRecord {
  [key: string]: any;
}

export interface Person {
  id: string;
  name: string;
  accountIds: string[];
  team?: string;      // 团队
  producer?: string;  // 抖音制作人
}

export type ProducerTargets = Record<string, Record<string, number>>;

export interface MetricWeight {
  column: string;
  weight: number;
}

export interface Threshold {
  column: string;
  min: number;
}

export interface AwardGrade {
  id: string;
  name: string;      // 等级名称，如"一等奖"
  count: number;     // 名额
  amount: number;    // 奖金
}

export interface AwardCategory {
  id: string;
  name: string;      // 奖项大类名称
  metrics: MetricWeight[];    // 该大类独立的评分字段及权重
  thresholds: Threshold[];    // 该大类准入门槛
  grades: AwardGrade[];       // 该大类下的细分等级
}

export interface RankingResult {
  person: Person;
  rawRecords: RawRecord[];
  score: number;
  rank: number;
  awardCategory?: AwardCategory;
  awardGrade?: AwardGrade;
  awardScores: Record<string, number>; 
  eligibility: Record<string, boolean>; 
}

export enum ViewMode {
  BONUS = 'BONUS',       // 原数据处理/奖金结果
  DATA = 'DATA',         // 团队数据统计
  KPI = 'KPI',           // 个人KPI考核
  SETTINGS = 'SETTINGS'  // 系统设置
}