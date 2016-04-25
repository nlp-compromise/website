module.exports=[
  {
    title:'Part-of-Speech Tagging',
    square:
      from:"walk the walk",
      to:"[Verb], [Determiner], [Noun]"
    id:"pos"
    code: 'nlp.text(\'\').tags()'
    about: 'assigns the particular grammars for each term'
  },
  {
    title:'Sentence tokenization'
    square:
      from:"Dr. Cool Sr. is 45. He weighs 4.5lb."
      to:"[Sentence],  [Sentence]"
    id:"sentences"
    code: 'nlp.text(\'\').sentences'
    about: 'chops text into sentences'
  },
  {
    title:'Verb conjugation'
    square:
      from:"swim"
      to:"swimming, swims, swam, swimmer.."
    id:"conjugation"
    code: 'nlp.verb(\'\').conjugate()'
    about: 'convert the tense and plurality of a verb'
  },
]
