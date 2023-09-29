//CSS
import styles from './Politica.module.css';

//Hooks
import { Link } from 'react-router-dom';

const PoliticaDePrivacidade = () => {
    const email = 'Dpo@moppe.com.br';
    const subject = 'Política de privacidade';
    const body = 'Desejo mais informações sobre a política de privacidade';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div className={styles.container}>
        <div className={styles.conteudo}>
            <h1>Política de privacidade</h1>
            <p>A Escola Moppe Ltda, inscrita no CNPJ/MF nº 07.535.734/0001-14, com sede na Avenida Lineu de Moura, n.º 1645 – Urbanova, São José dos Campos/SP, CEP 12244-380, cuida da segurança de suas informações e por isso esta Política de Privacidade explica de forma transparente como são utilizados seus dados pessoais e dados pessoais sensíveis em virtude da sua relação conosco. </p>
            <p>As seguintes informações discriminadas vão te auxiliar a melhor entender a Política de Privacidade e exercer seus direitos como titular de dados pessoais:</p>
            <h3>O que é Política de Privacidade?</h3>
            <p>É o documento que explica como os DADOS PESSOAIS do USUÁRIO serão tratados pela Escola Moppe Berçário, Infantil e Fundamental no âmbito deste website.</p>
            <p>Esta política apresenta as diretrizes para proteção nos processos de tratamento de dados que incluem coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração de dados pessoais de nossos clientes, colaboradores e terceiros.</p>
            <p>A Escola Moppe Berçário, Infantil e Fundamental se compromete e toma todos os cuidados necessários para atender a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados).</p>
            <h3>O que é a Lei Geral De Proteção De Dados (LGPD)?</h3>
            <p>A Lei nº 13.709/18, também conhecida como Lei Geral de Proteção de Dados Pessoais ou LGPD, dispõe sobre o tratamento de dados pessoais, nos meios físicos e digitais, com o objetivo de proteger os direitos fundamentais da liberdade e da privacidade e o livre desenvolvimento da personalidade natural.</p>
            <h3>O que são dados pessoais?</h3>
            <p>Toda informação que permite a sua identificação pela empresa, de forma direta ou associada a outros dados. Para fazer o seu cadastro na plataforma e você poder usufruir de nossos serviços/produtos coletamos suas informações como nome, endereço, e-mail e telefones para contato.</p>
            <h3>O que são dados pessoais sensíveis?</h3>
            <p>São informações sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético, biométrico, quando vinculadas a um indivíduo.</p>
            <h3>O que é tratamento de dados pessoais?</h3>
            <p>Nos termos da Lei Geral de Proteção de Dados (LGPD), o tratamento é toda operação realizada com seus dados pessoais pela empresa, tais como coleta, utilização, compartilhamento e armazenamento.</p>
            <p>A Escola Moppe Berçário, Infantil e Fundamental tratará dados pessoais para atender as necessidades de seus usuários de forma responsável e segura. Além disso, o tratamento de dados é necessário para personalização de serviços provendo uma experiência mais satisfatória ao usuário.</p>
            <h3>O que é Segurança da Informação?</h3>
            <p>São as medidas e ações tomadas para que os dados fornecidos por usuários e titulares de dados estejam protegidos, mantendo controles de segurança para preservar a confidencialidade, integridade e disponibilidade dos dados por nós controlados. Todas as ações e controles visam manter a proteção dos dados e evitar acessos indevidos.</p>
            <p>A Escola Moppe Berçário, Infantil e Fundamental segue as melhores práticas de mercado quanto à segurança das informações, cumprindo as legislações em vigência e as pertinentes ao segmento. Em caso de vazamento de dados, os titulares de dados serão informados, contudo uma vez públicos, não será possível garantir que estes não possam ser acessados indevidamente.</p>
            <h3>O que são cookies e como podemos utilizá-los?</h3>
            <p>Os cookies são pequenos arquivos de dados transferidos de um site da web para o disco do seu computador e não armazenam dados pessoais.</p>
            <h3>Para que servem os cookies? </h3>
            <p>Servem para facilitar a sua experiência de navegação, na medida em que eles aprendem sobre o seu histórico de visitas, agilizando a abertura de páginas, preenchimento de formulários e compras. Eles também nos auxiliam a aperfeiçoar as funcionalidades do nosso site e tornar a sua experiência de usuário cada vez mais completa. </p>
            <h3>Por que utilizamos cookies? </h3>
            <p>Sendo o nosso intuito sempre aperfeiçoar os nossos serviços e a experiência do usuário, a utilização de cookies é fundamental para agilizar e facilitar a navegação no nosso site e melhorar a experiência dos usuários durante a visita ao site.</p>
            <h3>Prospects/Leads</h3>
            <p>Durante os primeiros contatos entre a escola e os pais ou responsáveis, captamos alguns dados através de nosso site e pelas redes sociais através do link saiba mais.</p>
            <p>Estes dados são tratados pela escola através da plataforma do Lead Lovers.</p>
            <h3>Por que é realizado o tratamento de dados?</h3>
            <p>A Escola Moppe Berçário, Infantil e Fundamental somente realiza o TRATAMENTO de DADOS de acordo com a BASE LEGAL aplicável, ou seja: </p>
            <ul>
                <li>Através do consentimento do TITULAR</li>
                <li>Para cumprimento de obrigação legal ou regulatória a que a esteja obrigada a atender</li>
                <li>Para a execução de contratos, incluindo procedimentos preliminares nos quais o TITULAR seja parte</li>
                <li>Para exercício regular de direitos em processos judicial, administrativo ou arbitral</li>
                <li>Para garantia de prevenção à fraude e à segurança do TITULAR em processos de identificação do TITULAR</li>
                <li>Para atender o legítimo interesse da instituição</li>
                <li>Proteção ao crédito</li>
                <li>Proteção da vida ou incolumidade física</li>
            </ul>
            <h3>Com quem poderá ser compartilhado os dados?</h3>
            <p>A Escola Moppe Berçário, Infantil e Fundamental poderá divulgar Dados Pessoais e Sensíveis, na medida necessária e apropriada com operadores e fornecedores de serviços, com o fim de armazenamento dos dados, desenvolvimento ou aperfeiçoamento de soluções e serviços, bem como com empresas de apoio de serviços terceirizados e órgãos públicos para interesse da Saúde Pública, todos devidamente comprometidos com o cumprimento das Leis de Proteção de Dados vigentes e aplicáveis.</p>
            <h3>Por que tratamos dados?</h3>
            <p>Nós coletamos dados para possibilitar:</p>
            <ul>
                <li>Todos os processos decorrentes da matrícula do aluno</li>
                <li>Assegurar a segurança e saúde aos frequentadores da escola</li>
                <li>Relação entre a escola, pais, responsáveis e colaboradores</li>
                <li>Assegurar todos benefícios e gestão do vínculo entre escola e colaborador</li>
                <li>Defesa da escola perante a justiça</li>
                <li>Cumprimento de obrigações com órgãos regulatórios</li>
            </ul>
            <h3>Por quanto tempo são armazenados os dados?</h3>
            <p>Os dados pessoais coletados são armazenados e utilizados por período de tempo que corresponda ao necessário para atingir as finalidades elencadas neste documento e que considere os direitos de seus titulares, os direitos do controlador do site e as disposições legais ou regulatórias aplicáveis. Uma vez expirados os períodos de armazenamento dos dados pessoais, eles são removidos de nossas bases de dados ou anonimizados, salvo nos casos em que houver a possibilidade ou a necessidade de armazenamento em virtude de disposição legal ou regulatória. </p>
            <h3>Como a Escola Moppe Berçário, Infantil e Fundamental protege os dados?</h3>
            <p>A Escola Moppe Berçário, Infantil e Fundamental aplica medidas técnicas necessária para proteção dos DADOS, incluindo a utilização de sistemas antivírus, firewall, controles e logs de acessos, backup de DADOS sempre que possível, além de manter uma política interna para a proteção dos DADOS.</p>
            <h3>Essa política de privacidade pode mudar?</h3>
            <p>Esta POLÍTICA DE PRIVACIDADE poderá ser alterada a qualquer tempo, especialmente para adaptá-la às eventuais alterações feitas em nosso site, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes. Sempre que houver uma mudança, o TITULAR poderá acessar a versão atualizada no website, com integral acesso às referidas alterações.</p>
            <h3>Quais são os direitos dos titulares dos dados?</h3>
            <p>O TITULAR DE DADOS poderá, a qualquer tempo e mediante requisição, requerer:</p>
            <ul>
                <li>A confirmação da existência de tratamento dos dados</li>
                <li>A correção de dados incompletos, inexatos ou desatualizados</li>
                <li>A anonimização, bloqueio ou eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com o disposto na legislação</li>
                <li>A portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial</li>
                <li>A informação das entidades públicas e privadas com as quais a Escola Moppe Berçário, Infantil e Fundamental realizou uso compartilhado dos dados</li>
                <li>A informação sobre a possibilidade de não fornecer consentimento, sua revogação e sobre as consequências da negativa</li>
                <li>Demais informações e orientações a qualquer tempo de maneira simples e gratuita</li>
            </ul>
            <h3>Como entrar em contato conosco?</h3>
            <p>Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, entre em contato conosco pelo canal de atendimento abaixo:</p>
            <p><Link to={mailtoLink}>Dpo@moppe.com.br</Link></p>
        </div>
    </div>
  )
}

export default PoliticaDePrivacidade