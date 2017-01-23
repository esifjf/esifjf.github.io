var num=0;
function imgZoom(img) {
    if(!isNaN(img))
        num=img;
    console.log("img: " + img);
    var diretorio = document.getElementById("diretorio").value;
	if(img == 'close') {
        document.getElementById("bg-zoom").style.display = 'none';
        document.getElementById("menu-toggle").style.display = 'block';
	} else if(img == 'next') {
        if(num == document.getElementsByClassName("galeria").length-1) {
            num=0;
            document.getElementById("bg-zoom-img").innerHTML = document.getElementsByClassName("galeria")[num].innerHTML;
        } else {
            document.getElementById("bg-zoom-img").innerHTML = document.getElementsByClassName("galeria")[++num].innerHTML;
        }
    } else if(img == 'previous') {
        if(num==0) {
            num=document.getElementsByClassName("galeria").length-1;
            document.getElementById("bg-zoom-img").innerHTML = document.getElementsByClassName("galeria")[num].innerHTML;
        } else {
            document.getElementById("bg-zoom-img").innerHTML = document.getElementsByClassName("galeria")[--num].innerHTML;
        }
    } else {
		document.getElementById("bg-zoom").style.display = 'block';
        document.getElementById("bg-zoom-img").innerHTML = document.getElementsByClassName("galeria")[img].innerHTML;
        document.getElementById("menu-toggle").style.display = 'none';
	}
}

// ------ Conteúdos distribuidos em ordem. [Português, Inglês] ------
menu_pt_br = [
    'Início',
    'Sobre',
    'Estudos',
    'Publicações',
    'Prêmios',
    'Nosso time',
    'Contato',
];
menu_en = [
    'Home',
    'About',
    'Research',
    'Publications',
    'Awards',
    'Our team',
    'Contact'
];

header_pt_br = [
    'Grupo de Pesquisa em Engenharia de Software'
];
header_en = [
    'Software Engineering Research Group'
];

sobre_pt_br = [
    // 'Detalhamento de ferramentas e outros produtos da pesquisa realizada no Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais - Campus Juiz de Fora.',
    'Repercussões dos trabalhos do grupo',
    'A linha de pesquisa em Engenharia de Software do IF Sudeste MG tem o objetivo de atuar no desenvolvimento e disseminação de tecnologias de software em benefício da sociedade brasileira e comunidades de pesquisa científica. O desenvolvimento de pesquisas científicas realizadas nas áreas de qualidade de software, manutenção e evolução de software, verificação, validação e testes de software, engenharia de software experimental e simulação é o foco de atuação deste grupo.'
    // 'As mesmas são documentadas, informando os experimentos realizados com turmas e as respectivas revisões sistemáticas sobre o assunto abordado.'
];
sobre_en = [
    // 'Detail of tools and other products of the research carried out at the Federal Institute of Education, Science and Technology of the Southeast of Minas Gerais - Campus Juiz de Fora.',
    'Impact of group works',
    'The research line in Software Engineering of the IF Sudeste MG has the aim of acting in the development and dissemination of software technologies for the benefit of Brazilian society and scientific research communities. The development of scientific research carried out in the areas of software quality, maintenance and evolution of software, verification, validation and software testing, experimental software engineering and simulation is the focus of this group\'s performance.'
    // 'They are documented, informing the experiments performed with classes and the respective systematic reviews on the subject addressed.'
];

estudos_pt_br = [
    'Estudos',
    'Complexity Tool',
    'Ferramenta para Medir Complexidade Ciclomática de Métodos Java.',
    'Saiba mais'
];
estudos_en = [
    'Research',
    'Complexity Tool',
    'A Tool to Measure Cyclomatic Complexity of Java Methods.',
    'About more'
];

publicacoes_pt_br = [
    'Publicações',
    'Conferências',
    'Periódicos',
    'Resumos e pôsteres'
];
publicacoes_en = [
    'Publications',
    'Conferences',
    'Scientific journals',
    'Abstracts and posters'
];

premios_pt_br = [
    'Prêmios',
    '2º Lugar (poster) IV Seminário de Iniciação Científica, Instituto Federal do Sudeste de Minas Gerais - Campus JF.',
    'Segundo melhor artigo - SAST / CBSoft, PUC-MG / UFMG / CEFET-MG.',
    'Primeiro lugar no Concurso de Produtos, Processos e Serviços Inovadores, II SIMEPE, IF Sudeste MG.',
    '1º lugar na apresentação de pôster na área de Ciência da Computação, V Seminário de Iniciação Científica do IF Sudeste MG Campus Juiz de Fora.'
];
premios_en = [
    'Awards',
    '2nd place (poster) IV Scientific Initiation Seminar, Instituto Federal do Sudeste de Minas Gerais - Campus JF.',
    'Second best article - SAST / CBSoft, PUC-MG / UFMG / CEFET-MG.',
    'First place in the Product, Processes and Innovative Services Contest, II SIMEPE, IF Sudeste MG.',
    '1st place in the presentation of poster in the area of Computer Science, V Seminar of Scientific Initiation of the IF Sudeste MG Campus Juiz de Fora.'
];

time_pt_br = [
    'Quem nós somos?',
    'Somos um grupo de estudantes do IF Sudeste MG - Campus Juiz de Fora, formado por alunos dos cursos de Bacharelado de Sistemas de Informação e Técnico em Informática, orientados pelo professor Marco Antônio Pereira Araújo e pelo bacharel Heleno de Souza Campus Júnior.',
    // Marco Antônio
    'Doutor e Mestre em Engenharia de Sistemas e Computação pela COPPE/UFRJ. Especialista em Métodos Estatísticos Computacionais e Bacharel em Matemática com Habilitação em Informática pela UFJF. Professor Adjunto da UFJF. Professor do IF Sudeste MG - Campus Juiz de Fora.',
    'Orientador',
    // Heleno
    'Cursa Mestrado em Ciência da Computação na UFJF. Bacharel em Sistemas de Informação pelo IF Sudeste MG - Campus Juiz de Fora. Atua com pesquisa em Engenharia de Software na linha de Manutenção e Evolução de Software.',
    'Orientador',
    // Nathan
    'Graduando em Sistemas de Informação e bolsista de iniciação científica do Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais - Campus Juiz de Fora. Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software.',
    'Bolsista do IFSUDESTEMG',
    // Angelo
    'Graduando em Sistemas de Informação no Instituto Federal do Sudeste de Minas Gerais - Campus Juiz de Fora. Tem experiência na área de Ciência da Computação, com ênfase em Sistemas de Informação.',
    'Bolsista de Iniciação Científica do CNPq',
    // Rafael
    'Técnico em Informática, Graduando em Sistemas de Informação no Instituto Federal do Sudeste de Minas Gerais - Campus Juiz de Fora. Tem experiência na área de Sistemas de Informação com ênfase em Desenvolvimento Web.',
    'Bolsista do IFSUDESTEMG',
    // Pedro
    'Possui ensino fundamental primeiro grau pelo Colégio santa Catarina (JF) (2014). Tem experiência na área de Ciência da Computação.',
    'Bolsista de Iniciação Científica Júnior do CNPq',
    // Thiago
    'Possui ensino fundamental primeiro grau pelo Colégio Providência (2014). Tem experiência na área de Ciência da Computação.',
    'Bolsista de Iniciação Científica Júnior do CNPq'
];
time_en = [ //Technician in Computer science / IT / Information Technology
    'Who we are?',
    'We are a group of IF Sudeste MG - Campus Juiz de Fora, formed by students of the courses of Bachelor of Information Systems and Computing, guided by professor Marco Antônio Pereira Araújo and by bachelor Heleno de Souza Campus Júnior.',
    // Marco Antônio
    'Doctor and Master in Systems Engineering and Computing at COPPE / UFRJ. Specialist in Computational Statistical Methods and Bachelor in Mathematics with Computer qualification at UFJF. Adjunct Professor of UFJF. Professor of IF Sudeste MG - Campus Juiz de Fora.',
    'Leader',
    // Heleno
    'He is currently taking master\'s degree in Computer Science at UFJF. Bachelor in Information Systems by IF Sudeste MG - Campus Juiz de Fora. Works with Software Engineering research in Software Maintenance and Evolution.',
    'Leader',
    // Nathan
    'Graduating in Information Systems and scholarship holder of scientific initiation of the IF Sudeste MG - Campus Juiz de Fora. Has experience in the area of Computer Science, with emphasis on Software Engineering.',
    'IFSUDESTEMG scholarship holder',
    // Angelo
    'Graduating in Information Systems at the IF Sudeste MG - Campus Juiz de Fora. Has experience in the area of Computer Science, with emphasis on Information Systems.',
    'CNPq\'s Scholarship of Scientific Initiation',
    //Rafael
    'IT technician, Graduating in Information Systems at the Instituto Federal do Sudeste de Minas Gerais - Campus Juiz de Fora. Has experience in the area of Information Systems with emphasis in Web Development.',
    'IFSUDESTEMG scholarship holder',
    // Pedro
    'He has a first grade elementary school at Santa Catarina College (JF) (2014). Has experience in the area of Computer Science.',
    'CNPq Junior Scientific Initiation Scholarship',
    // Thiago
    'He has a first grade elementary school from the Providência College (2014). Has experience in the area of Computer Science.',
    'CNPq Junior Scientific Initiation Scholarship'
];

info_pt_br = [
    'Nossos estudos'
];
info_en = [
    'Our researches'
];
rodape_pt_br = [
    'Endereço / Contato',
    'Rua Bernardo Mascarenhas, 1283 - Bairro Fábrica',
    'Juiz de Fora, MG. CEP: 36080-001'
];
rodape_en = [
    'Address / Contact',
    '1283 Bernardo Mascarenhas Street - Fábrica',
    'Juiz de Fora, MG. CEP: 36080-001'
];

// Conteúdo Index Português
index_pt_br = [
    menu_pt_br,
    header_pt_br,
    sobre_pt_br,
    estudos_pt_br,
    publicacoes_pt_br,
    premios_pt_br,
    time_pt_br,
    // info_pt_br,
    rodape_pt_br
];

// Conteúdo Index Inglês
index_en = [
    menu_en,
    header_en,
    sobre_en,
    estudos_en,
    publicacoes_en,
    premios_en,
    time_en,
    // info_en,
    rodape_en
];

//--- Complexity Tool ---
menu_complexity_tool_pt_br = [
    'Voltar',
    'Sobre',
    'Estudos',
    'Funcionamento',
    'Imagens',
    'Vídeos',
    'Contribuições',
    'Contato'
];
menu_complexity_tool_en = [
    'Return',
    'About',
    'Research',
    'How it works',
    'Images',
    'Videos',
    'Contributions',
    'Contact'
];

header_complexity_tool_pt_br = [
    'Ferramenta para Medir Complexidade Ciclomática de Métodos Java'
];
header_complexity_tool_en = [
    'A Tool to Measure Cyclomatic Complexity of Java Methods'
];
sobre_complexity_tool_pt_br = [
    'Uma ferramenta desenvolvida na linguagem Java com o objetivo de analisar métodos de uma determinada classe Java e gerar seu Grafo de Controle de Fluxo correspondente.',
    'Funções:',
    'Deve gerar um grafo da Complexidade Ciclomática para cada método da classe analisada',
    'Deve permitir ao desenvolvedor navegar pelos caminhos independentes dos grafos gerados',
    'Deve fornecer uma análise sobre os grafos gerados contendo caminhos independentes, condições para que esses caminhos sejam satisfeitos e a Complexidade Ciclomática do método analisado',
    'Deve facilitar o entendimento do grafo através da indicação do trecho de código correspondente a cada vértice'
];
sobre_complexity_tool_en = [
    'A tool developed in Java to analyze methods of a given Java class and generate its corresponding Control Flow Graph.',
    'Functions:',
    'It must generate a graph of the Cyclomatic Complexity for each method of the analyzed class',
    'It must allow the developer to navigate the independent paths of generated graphs',
    'It must provide an analysis about the generated graphs containing independent paths, conditions for these paths to be satisfied and the Cyclomatic Complexity of the analyzed method',
    'It must facilitate the understanding of the graph by indicating the code snippet corresponding to each vertex'
];

funcionamento_complexity_tool_pt_br = [
    'Etapas do funcionamento',
    'Para essa atividade, é utilizada uma biblioteca de código fonte aberto <a href="https://github.com/javaparser/javaparser" target="_blank">JavaParser</a>. A biblioteca é capaz de ler arquivos de código fonte na linguagem Java e disponibilizar uma Abstract Syntax Tree (AST), representando a estrutura do código fonte lido e possibilitando a coleta de informações sobre o mesmo.',
    'Nessa atividade é necessário processar a AST para gerar uma estrutura de grafos que represente o código fonte. Para isso, é utilizado um Recursive Descent Parser que permite processar a AST a partir de regras para blocos de comando. Foram criadas regras para os seguintes blocos de comando: if / else, switch / case, for-each, for, while, do-while, return, break.',
    'A partir do momento que se tem a estrutura do grafo da Complexidade Ciclomática, deve-se renderizá-lo na tela para o usuário. Para isso, utiliza-se a biblioteca <a href="http://jung.sourceforge.net/" target="_blank">JUNG (Java Universal Network/Graph Framework</a>, também de código aberto.',
    'Possuindo o grafo renderizado, é possível realizar análises estáticas sobre o mesmo. Exemplo de análise é a geração dos caminhos independentes e cálculo da Complexidade Ciclomática. Para a geração dos caminhos independentes, é usado um método conhecido como baseline method:',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>Partindo do nó inicial até o nó final do grafo, calcula-se o caminho mais à esquerda (leftmost path), chamado de caminho base;',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>A partir do caminho base, para cada nó predicado, cria-se um novo caminho invertendo a condição do nó. Repete-se esse passo enquanto houverem nós predicados que não foram invertidos. Ao final, tem-se um caminho base somado à quantidade de caminhos independentes derivados (de acordo com a existência de nós predicados no grafo).'
];
funcionamento_complexity_tool_en = [
    'How it works',
    'For this activity, is used the <a href="https://github.com/javaparser/javaparser" target="_blank">JavaParser</a> an open source library. The library is able to read source files in the Java language and provide an Abstract Syntax Tree (AST), representing the structure of the source code read and enabling the collection of information about it.',
    'In this activity it is necessary to process the AST to generate a graph structure that represents the source code. For this, a Recursive Descent Parser is used that allows to process the AST from rules for command blocks. Rules have been created for the following command blocks: if / else, switch / case, for-each, for, while, do-while, return, break.',
    'From the moment we have the structure of the graph of the Cyclomatic Complexity, it must render on the screen to the user. For this, the <a href="http://jung.sourceforge.net/" target="_blank">JUNG (Java Universal Network / Graph Framework</a>, also an open source library is used.',
    'With the rendered graph, it is possible to carry out static analyzes on it. Some examples of analysis is the generation of the independent paths and calculation of the Cyclomatic Complexity. For the generation of independent paths, a method known as baseline method is used:',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>Starting from the initial node to the final node of the graph, we calculate the leftmost path, called the base path;',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>From the base path, for each predicate node, a new path is created by reversing the node condition. This step is repeated as long as there are predicate nodes that have not been inverted. At the end, there is a base path added to the number of independent derived paths (according to the existence of predicate nodes in the graph).'
];

imagens_complexity_tool_pt_br = [
    'Imagens da Complexity Tool',
    'Grafo e código originais',
    'Grafo e código refatorados'
];
imagens_complexity_tool_en = [
    'Images of the Complexity Tool',
    'Original graph and code',
    'Refactored graph and code'
];

videos_complexity_tool_pt_br = [
    'Vídeos',
    'Apresentação da ferramenta Complexity Tool desenvolvida ao longo do projeto, em apoio ao teste de software.'

];
videos_complexity_tool_en = [
    'Videos',
    'Presentation of the Complexity Tool developed throughout the project, in support of software testing.'
];

contribuicoes_complexity_tool_pt_br = [
    'Contribuições',
    'Melhoria da qualidade dos produtos de software',
    'Otimização da utilização de recursos',
    'Diminuição de retrabalho',
    'Apoio à criação de testes de unidade'
];
contribuicoes_complexity_tool_en = [
    'Contributions',
    'Quality improvement of software products',
    'Optimization of resource use',
    'Less rework',
    'Support for creating unit tests'
];

info_complexity_tool_pt_br = [
    'A Complexity Tool está em desenvolvimento. Quando estiver funcional, a mesma será incorporada como uma extensão das IDEs NetBeans e Eclipse, possibilitando ao usuário rápido acesso às suas funcionalidades enquanto estiver programando.'
];
info_complexity_tool_en = [
    'The Complexity Tool is in development. When it becomes functional, it will be incorporated as an extension of the NetBeans and Eclipse IDE, giving the user quick access to their features while programming.'
];

// Conteúdo Complexity-Tool Português
complexity_tool_pt_br = [
    menu_complexity_tool_pt_br,
    header_complexity_tool_pt_br,
    sobre_complexity_tool_pt_br,
    estudos_pt_br,
    funcionamento_complexity_tool_pt_br,
    imagens_complexity_tool_pt_br,
    videos_complexity_tool_pt_br,
    contribuicoes_complexity_tool_pt_br,
    info_complexity_tool_pt_br,
    rodape_pt_br
];

// Conteúdo Complexity-Tool Inglês
complexity_tool_en = [
    menu_complexity_tool_en,
    header_complexity_tool_en,
    sobre_complexity_tool_en,
    estudos_en,
    funcionamento_complexity_tool_en,
    imagens_complexity_tool_en,
    videos_complexity_tool_en,
    contribuicoes_complexity_tool_en,
    info_complexity_tool_en,
    rodape_en
];

function checkLanguage(file_name) {
    if(localStorage.getItem("file_name") == null) {
        localStorage.setItem('file_name', file_name);
        localStorage.setItem('language', 'pt_br');
    } else if(localStorage.getItem("file_name") != file_name) {
        localStorage.setItem('file_name', file_name);
    }
}
function setLanguage(file_name,language) {
    var vetor = 0;
    var info = 0;
    var i = 0;
    localStorage.setItem("file_name", file_name);
    localStorage.setItem("language", language);
    while (i < document.getElementsByClassName('idioma').length) {
        if (eval(file_name+language)[vetor].length>info) {
            document.getElementsByClassName('idioma')[i++].innerHTML = eval(file_name+language)[vetor][info++];
        } else {
            info=0;
            vetor++;
        }
    }
}