var Generator = require("yeoman-generator")

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "title",
        message: "Your project title",
      },
    ])
  }

  writing() {
    var formalTitle = this.answers.title
    formalTitle = formalTitle[0].toUpperCase() + formalTitle.substring(1);


    this.fs.delete(this.destinationPath(`src/app/actions/${this.answers.title}.ts`));
    this.fs.delete(this.destinationPath(`src/app/models/I${formalTitle}.ts`));
    this.fs.delete(this.destinationPath(`src/app/reducers/${this.answers.title}.ts`));
    this.fs.delete(this.destinationPath(`src/app/saga/${this.answers.title}Saga.ts`));
    this.fs.delete(this.destinationPath(`src/app/mappers/${this.answers.title}Mapper.ts`));


    this.fs.copyTpl(
      this.templatePath("actions.ts"),
      this.destinationPath(`src/app/actions/${this.answers.title}.ts`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("model.ts"),
      this.destinationPath(`src/app/models/I${formalTitle}.ts`),
      { formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("reducer.ts"),
      this.destinationPath(`src/app/reducers/${this.answers.title}.ts`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("saga.ts"),
      this.destinationPath(`src/app/saga/${formalTitle}Saga.ts`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("mapper.ts"),
      this.destinationPath(`src/app/mappers/${formalTitle}Mapper.ts`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("containers/Edit.tsx"),
      this.destinationPath(`src/app/containers/${formalTitle}/${formalTitle}Edit.tsx`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("containers/Form.tsx"),
      this.destinationPath(`src/app/containers/${formalTitle}/${formalTitle}Form.tsx`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("containers/index.tsx"),
      this.destinationPath(`src/app/containers/${formalTitle}/index.tsx`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("containers/List.tsx"),
      this.destinationPath(`src/app/containers/${formalTitle}/${formalTitle}List.tsx`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("containers/Info.tsx"),
      this.destinationPath(`src/app/containers/${formalTitle}/${formalTitle}Info.tsx`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )

    this.fs.copyTpl(
      this.templatePath("containers/New.tsx"),
      this.destinationPath(`src/app/containers/${formalTitle}/${formalTitle}New.tsx`),
      { title: this.answers.title, formalTitle: formalTitle }, // user answer `title` used
    )
  }
}
