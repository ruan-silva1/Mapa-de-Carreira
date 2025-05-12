document.addEventListener("DOMContentLoaded", function() {
    // Definir as listas de tecnologias relacionadas a dados
    const dataAnalysisSkills = [
      { name: 'Python', progress: 35 },
      { name: 'R', progress: 10 },
      { name: 'Pandas', progress: 12 },
      { name: 'NumPy', progress: 10 },
      { name: 'Matplotlib', progress: 15 }
    ];

    const databasesSkills = [
      { name: 'SQL', progress: 85 },
      { name: 'PostgreSQL', progress: 32 },
      { name: 'MySQL', progress: 70 },
      { name: 'MongoDB', progress: 45 }
    ];

    const dataVisualizationSkills = [
      { name: 'Tableau', progress: 10 },
      { name: 'Power BI', progress: 30},
      { name: 'D3.js', progress: 10 },
      { name: 'Plotly', progress: 15 }
    ];

    const otherSkills = [
      'Machine Learning',
      'Deep Learning',
      'Big Data',
      'ETL Processes',
      'Data Pipelines',
      'Jupyter Notebooks',
      'Hadoop',
      'Spark'
    ];

    // Função para criar a lista de habilidades com barra de progresso
    function createSkillList(title, skills) {
      let section = `<div class="resume-skill-item">
                       <h4 class="resume-skills-cat font-weight-bold">${title}</h4>
                       <ul class="list-unstyled mb-4">`;

      skills.forEach(skill => {
        section += `<li class="mb-2">
                      <div class="resume-skill-name">${skill.name || skill}</div>
                      <div class="progress resume-progress">
                        <div class="progress-bar theme-progress-bar-dark" role="progressbar"
                          style="width: ${skill.progress || 100}%" aria-valuenow="${skill.progress || 100}" aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </li>`;
      });

      section += `</ul></div>`;
      return section;
    }

    // Criar todas as seções
    const dataAnalysisSection = createSkillList('Análise de Dados', dataAnalysisSkills);
    const databasesSection = createSkillList('Bancos de Dados', databasesSkills);
    const dataVisualizationSection = createSkillList('Visualização de Dados', dataVisualizationSkills);
    
    let otherSection = '<div class="resume-skill-item"><h4 class="resume-skills-cat font-weight-bold">Outras</h4><ul class="list-inline">';
    otherSkills.forEach(skill => {
      otherSection += `<li class="list-inline-item"><span class="badge badge-light">${skill}</span></li>`;
    });
    otherSection += '</ul></div>';

    // Inserir as seções no HTML
    document.getElementById('resume-content').innerHTML = dataAnalysisSection + databasesSection + dataVisualizationSection + otherSection;
  });