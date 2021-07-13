function downloadCV (){
    const a = document.body.appendChild(
        document.createElement("a")
    )
    a.download = "FelipeSiqueira-CV.docx"
    a.href= "/assets/documents/FelipeSiqueira-CV.docx"
    a.click()
}