'use client';

export const questions = [
  {
    id: 1,
    question: "Qual característica mais diferencia um empreendedor de um profissional tradicional?",
    options: [
      "Seguir sempre ordens",
      "Evitar qualquer risco",
      "Criar oportunidades mesmo diante de incertezas",
      "Priorizar estabilidade acima de tudo"
    ],
    answer: "Criar oportunidades mesmo diante de incertezas",
    hint: "Pense em quem enxerga chance de negócio onde outros veem problemas."
  },
  {
    id: 2,
    question: "Capital inicial é essencial para um negócio. Qual é seu real propósito?",
    options: [
      "Financiar apenas marketing",
      "Custear despesas iniciais e estruturar a operação",
      "Garantir lucro imediato",
      "Pagar funcionários antigos"
    ],
    answer: "Custear despesas iniciais e estruturar a operação",
    hint: "Ele serve para manter a empresa de pé antes que o faturamento aconteça."
  },
  {
    id: 3,
    question: "Pesquisa de mercado serve principalmente para:",
    options: [
      "Escolher a cor do logotipo",
      "Contratar funcionários",
      "Calcular impostos",
      "Medir riscos e identificar oportunidades"
    ],
    answer: "Medir riscos e identificar oportunidades",
    hint: "É o estudo que ajuda a entender clientes e concorrentes."
  },
  {
    id: 4,
    question: "Concorrência indireta pode impactar suas vendas. Por quê?",
    options: [
      "Vende exatamente o mesmo produto",
      "Atende a mesma necessidade com soluções diferentes",
      "Não possui clientes",
      "Opera apenas offline"
    ],
    answer: "Atende a mesma necessidade com soluções diferentes",
    hint: "Pense em pizza x hambúrguer: produtos diferentes, mas satisfazem a mesma fome."
  },
  {
    id: 5,
    question: "Qual exemplo melhor representa um custo fixo?",
    options: [
      "Matéria-prima variável",
      "Aluguel do espaço da empresa",
      "Comissão por venda",
      "Embalagens por produto"
    ],
    answer: "Aluguel do espaço da empresa",
    hint: "É o gasto que não muda, mesmo que você venda mais ou menos."
  },
  {
    id: 6,
    question: "Lucratividade se diferencia do faturamento porque:",
    options: [
      "É o total de vendas",
      "Mede apenas impostos pagos",
      "Indica quanto sobra depois dos custos",
      "Representa capital investido"
    ],
    answer: "Indica quanto sobra depois dos custos",
    hint: "Não adianta vender muito se os gastos também forem altos."
  },
  {
    id: 7,
    question: "Escalabilidade está relacionada a:",
    options: [
      "Aumentar apenas o número de funcionários",
      "Crescer sem aumentar proporcionalmente os custos",
      "Reduzir custos fixos",
      "Expandir localmente"
    ],
    answer: "Crescer sem aumentar proporcionalmente os custos",
    hint: "Pense em um app que cresce em usuários sem precisar contratar milhares de pessoas."
  },
  {
    id: 8,
    question: "Um pitch eficaz deve:",
    options: [
      "Ser longo e detalhado",
      "Apresentar apenas dados financeiros",
      "Contar toda a história da empresa",
      "Resumir a ideia e convencer rapidamente"
    ],
    answer: "Resumir a ideia e convencer rapidamente",
    hint: "Imagine que você tem só 1 minuto para vender a sua ideia."
  },
  {
    id: 9,
    question: "Qual destas empresas se encaixa melhor no conceito de startup?",
    options: [
      "Padaria tradicional",
      "Aplicativo digital em rápido crescimento",
      "Escola pública",
      "Biblioteca comunitária"
    ],
    answer: "Aplicativo digital em rápido crescimento",
    hint: "É uma empresa jovem, inovadora e com alto potencial de escala."
  },
  {
    id: 10,
    question: "Fluxo de caixa é:",
    options: [
      "Um registro de lucro líquido",
      "Relatório de vendas",
      "Apenas investimento inicial",
      "Controle de entradas e saídas de dinheiro"
    ],
    answer: "Controle de entradas e saídas de dinheiro",
    hint: "É como o extrato bancário da empresa."
  },
  {
    id: 11,
    question: "Inovação disruptiva é diferente da incremental porque:",
    options: [
      "Melhora gradualmente produtos existentes",
      "Cria algo totalmente novo que muda o mercado",
      "Copia concorrentes",
      "Mantém processos antigos"
    ],
    answer: "Cria algo totalmente novo que muda o mercado",
    hint: "Smartphones mudaram o mercado de celulares de forma radical."
  },
  {
    id: 12,
    question: "Plano de negócios serve para:",
    options: [
      "Registrar funcionários",
      "Organizar metas, estratégias e estrutura operacional",
      "Escolher cores de marca",
      "Calcular imposto"
    ],
    answer: "Organizar metas, estratégias e estrutura operacional",
    hint: "É como o mapa do caminho que o negócio vai seguir."
  },
  {
    id: 13,
    question: "MEI é indicado para:",
    options: [
      "Microempreendedor Individual",
      "Grande empresa internacional",
      "Franquias",
      "Empresa pública"
    ],
    answer: "Microempreendedor Individual",
    hint: "É o modelo de formalização simplificada para pequenos negócios."
  },
  {
    id: 14,
    question: "Vantagem de ser MEI:",
    options: [
      "Evita pagar qualquer imposto",
      "Formalização simples com impostos reduzidos",
      "Não precisa emitir nota fiscal",
      "Ter sócios automaticamente"
    ],
    answer: "Formalização simples com impostos reduzidos",
    hint: "O regime foi criado justamente para facilitar a vida do pequeno empreendedor."
  },
  {
    id: 15,
    question: "Marketing digital tem como foco:",
    options: [
      "Publicidade offline",
      "Reduzir custos fixo",
      "Alcançar clientes por canais online",
      "Treinar funcionários"
    ],
    answer: "Alcançar clientes por canais online",
    hint: "Envolve redes sociais, anúncios online e e-mail marketing."
  },
  {
    id: 16,
    question: "Networking é importante porque:",
    options: [
      "É um relatório contábil",
      "Serve apenas para trocar cartões",
      "Aumenta contatos que geram oportunidades",
      "Não influencia no crescimento do negócio"
    ],
    answer: "Aumenta contatos que geram oportunidades",
    hint: "Quem você conhece pode abrir portas que sozinho seriam mais difíceis."
  },
  {
    id: 17,
    question: "Protótipo é usado para:",
    options: [
      "Testar ideias com menor custo",
      "Documentar funcionários",
      "Criar logotipo",
      "Controlar estoque"
    ],
    answer: "Testar ideias com menor custo",
    hint: "É uma versão inicial e simplificada do produto."
  },
  {
    id: 18,
    question: "Cliente-alvo é:",
    options: [
      "Todo consumidor da cidade",
      "Grupo específico que você quer atingir",
      "Apenas fornecedores",
      "Concorrentes"
    ],
    answer: "Grupo específico que você quer atingir",
    hint: "Definir para quem você vende aumenta a eficácia do marketing."
  },
  {
    id: 19,
    question: "Fidelização de clientes é:",
    options: [
      "Ignorar antigos clientes",
      "Reduzir preços continuamente",
      "Conquistar só novos clientes",
      "Fazer clientes voltarem"
    ],
    answer: "Fazer clientes voltarem",
    hint: "É mais barato manter quem já comprou do que atrair novos."
  },
  {
    id: 20,
    question: "Diferenciação de produto é:",
    options: [
      "Destacar seu produto frente à concorrência",
      "Aumentar preço sem valor agregado",
      "Diminuir qualidade para reduzir custo",
      "Copiar concorrentes"
    ],
    answer: "Destacar seu produto frente à concorrência",
    hint: "É o que faz o cliente escolher você em vez do outro."
  },
  {
    id: 21,
    question: "Pivotar um negócio significa:",
    options: [
      "Manter tudo igual",
      "Desistir do negócio",
      "Ajustar modelo ou estratégia quando algo não funciona",
      "Aumentar funcionários"
    ],
    answer: "Ajustar modelo ou estratégia quando algo não funciona",
    hint: "É como mudar a direção do navio sem abandonar a viagem."
  },
  {
    id: 22,
    question: "MVP significa:",
    options: [
      "Produto mínimo viável",
      "Máximo valor de produto",
      "Modelo de vendas pública",
      "Medida de valor padrão"
    ],
    answer: "Produto mínimo viável",
    hint: "É a versão mais simples possível para validar a ideia."
  },
  {
    id: 23,
    question: "Break-even point é:",
    options: [
      "Momento em que a empresa cobre custos, sem lucro",
      "Maior lucro do ano",
      "Total de despesas fixas",
      "Receita anual"
    ],
    answer: "Momento em que a empresa cobre custos, sem lucro",
    hint: "É quando as contas fecham no zero a zero."
  },
  {
    id: 24,
    question: "Benchmarking é:",
    options: [
      "Contratar funcionários",
      "Criar logotipo",
      "Registrar impostos",
      "Observar práticas de outros negócios para aprender"
    ],
    answer: "Observar práticas de outros negócios para aprender",
    hint: "É comparar-se com os melhores para melhorar."
  },
  {
    id: 25,
    question: "ROI significa:",
    options: [
      "Retorno sobre investimento",
      "Receita operacional inicial",
      "Lucro líquido mensal",
      "Participação acionária"
    ],
    answer: "Retorno sobre investimento",
    hint: "Mostra se o que você gastou valeu a pena financeiramente."
  },
  {
    id: 26,
    question: "Churn representa:",
    options: [
      "Lucro do mês",
      "Novos clientes adquiridos",
      "Taxa de clientes perdidos",
      "Receita anual"
    ],
    answer: "Taxa de clientes perdidos",
    hint: "É o oposto da fidelização: quando clientes deixam de usar seu produto."
  },
  {
    id: 27,
    question: "Validação de ideia é:",
    options: [
      "Testar se clientes querem realmente o produto",
      "Abrir CNPJ",
      "Criar redes sociais",
      "Fazer logotipo"
    ],
    answer: "Testar se clientes querem realmente o produto",
    hint: "Serve para evitar gastar com algo que ninguém quer."
  },
  {
    id: 28,
    question: "Ecossistema de inovação é:",
    options: [
      "Conjunto de empresas e pessoas que colaboram em novos negócios",
      "Empresa isolada",
      "Concorrência direta",
      "Rede de supermercados"
    ],
    answer: "Conjunto de empresas e pessoas que colaboram em novos negócios",
    hint: "É como uma rede de apoio que acelera a criação de soluções novas."
  },
  {
    id: 29,
    question: "Planejamento estratégico é:",
    options: [
      "Escolher fornecedores",
      "Registrar impostos",
      "Calcular lucro mensal",
      "Traçar metas, ações e recursos para atingir objetivos"
    ],
    answer: "Traçar metas, ações e recursos para atingir objetivos",
    hint: "É o plano mestre para chegar onde a empresa deseja."
  },
  {
    id: 30,
    question: "Sustentabilidade empresarial é:",
    options: [
      "Atuar considerando impacto social, ambiental e econômico",
      "Reduzir apenas custos financeiros",
      "Criar produtos descartáveis",
      "Evitar pagar impostos"
    ],
    answer: "Atuar considerando impacto social, ambiental e econômico",
    hint: "Vai além do lucro: pensa no planeta e na sociedade também."
  }
];
