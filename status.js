export default function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  return res.status(200).json({ok:true,configured:Boolean(process.env.OPENAI_API_KEY),model:process.env.OPENAI_MODEL||'gpt-5.6-luna',version:'10.0.0'});
}
