// 公開される設定ファイルです。個人情報や秘密情報は記入しないでください。
window.NFC_CONFIG = {
  title: 'サービスのご案内',
  links: [
    {label:'LINEお友だち登録',url:'',enabled:true},
    {label:'公式アプリ',url:'',enabled:true},
    {label:'口コミのご案内',url:'',enabled:true},
    {label:'抽選に参加',url:'lottery/',enabled:true},
    {label:'お知らせ',url:'',enabled:false}
  ],
  lottery: [
    {label:'ルーレット抽選',type:'roulette',enabled:true},
    {label:'くじ引き',type:'kuji',enabled:true},
    {label:'あみだくじ',type:'amida',enabled:true}
  ],
  // デモ用の抽選結果。実際の景品・当選率は運用開始前に別途設計してください。
  demoResults: ['結果A','結果B','結果C']
};
