const socialMediaLinks = {
  github: 'gabrielaragorn',
  youtube: 'channel/UCh2J7lYoDoCLb2G6qSKPEiw',
  facebook: 'gabrielaragorn',
  instagram: 'gabrielaragorn',
  twitter: 'gabrielaragorn'
}

function changeSocialMediaLinks() {
  // <ul> children <li>
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')

    //change the link content
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithubProfilieInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    //arrow function
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.name
    })
}

getGithubProfilieInfos()
