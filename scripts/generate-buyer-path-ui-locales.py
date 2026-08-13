from pathlib import Path
import json
from openai import OpenAI

ROOT = Path('/home/ubuntu/sourcingally')
OUT = ROOT / 'src/data/buyer-path-ui-locales.ts'
client = OpenAI()
english = {
  'back':'← Choose your sourcing path', 'route':'Route', 'follow':'Follow the route ↓', 'brief':'Build your project brief ↗', 'status':'SA / ROUTE', 'scrollRoute':'Scroll to move through the decision route.',
  'how':'How to read this route', 'sequence':'One sequence. Four connected decisions.', 'orientation':'Use this page to understand the order of work. It does not replace a project scope or determine whether a supplier, product, shipment, or decision is suitable for your particular case.',
  'routeLabel':'The route', 'routeHeading':'Move through the work in a clearer order.', 'scroll':'SCROLL ↓', 'decision':'Decision', 'openGuide':'Open the related guide', 'markers':['SOURCE','CHECK','CONTROL','MOVE'],
  'risks':'Things that can go wrong', 'risksHeading':'Make the risk visible before it becomes expensive.', 'risksCopy':'These are common planning problems, not predictions about any particular supplier or order.',
  'checklist':'Preparation checklist', 'checklistHeading':'Bring the right information into the first conversation.', 'checklistCopy':'Use this as a preparation list. The Project Brief Builder turns these inputs into an email or WhatsApp draft without storing the information on the website.', 'create':'Create your project brief ↗',
  'next':'Continue the route', 'nextHeading':'Take the next useful action.', 'nextCopy':'Move to the guide, service, question, or project brief that helps you turn this route into a practical next step.',
  'noteTitle':'General education, not a guarantee.', 'noteCopy':'Sourcing Ally provides educational content and can discuss agreed local support. Product, supplier, shipment, legal, customs, testing, tax, and compliance decisions require current information appropriate to the actual project. Read the', 'disclaimer':'Disclaimer'
}
targets={'es':'neutral, natural Latin American Spanish','pt':'natural professional Brazilian Portuguese','ru':'clear professional Russian; use Russian script for all non-brand labels','tr':'clear professional Turkish','fr':'natural professional international French'}
props={key:({'type':'array','items':{'type':'string'}} if key=='markers' else {'type':'string'}) for key in english}
schema={'type':'json_schema','json_schema':{'name':'localized_buyer_path_ui','strict':True,'schema':{'type':'object','properties':props,'required':list(english),'additionalProperties':False}}}
system='You are a senior website localization editor. Translate every visible public website interface label into the requested target language. Preserve only the Sourcing Ally brand and the SA initials. Do not add claims. Return JSON only matching the schema.'
result={'en':english}
for code,target in targets.items():
  r=client.chat.completions.create(model='gpt-5-mini',messages=[{'role':'system','content':system},{'role':'user','content':f'Target: {target}.\n\nEnglish UI source:\n{json.dumps(english,ensure_ascii=False)}'}],response_format=schema,max_completion_tokens=5000)
  data=json.loads(r.choices[0].message.content)
  if len(data['markers'])!=4: raise RuntimeError(f'{code}: invalid markers')
  result[code]=data
  print(f'Generated {code}')
OUT.write_text('export const buyerPathUiLocales = '+json.dumps(result,ensure_ascii=False,indent=2)+' as const;\n',encoding='utf-8')
print(f'Wrote {OUT}')
