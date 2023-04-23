export class DevEnv {
  mark: void | { clear(): void }
  lineMark: void | { clear(): void }

  constructor(
    private editor: CodeMirrorEditor,
    private lineNumbers: HTMLElement
  ) {}

  clearState() {
    this.mark?.clear()
    this.lineMark?.clear()
    this.lineNumbers.classList.remove('error')
  }

  setError(location: { column: number; line: number }) {
    this.mark?.clear()
    this.lineMark?.clear()
    this.lineNumbers.classList.add('error')
    console.log({ line: location.line, column: location.column })
    this.mark = this.editor.markText(
      {line: location.line - 1, ch: 0 },
      {line: location.line - 1, ch: location.column  },
      { css: 'background: #f888' }
    )
  }
}
