import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <div class="navigation">
    <span class="header"><a href="./index.html">Jaween<br/><h6>Ediriweera</h6></a></span>
    <br/><hr/><br/>
    <p>This is an exhibit of some software that I have built since I was a kid.</p>
    <div class="footer">
      <table>
        <tr>
          <td><img src="resources/images/email_icon.png"></td>
          <td><a href="mailto:jaween.ediriweera@gmail.com?Subject=Hello">jaween.ediriweera@gmail.com</a></td>
        </tr>
        <tr>
          <td><img src="resources/images/github_icon.png"></td>
          <td><a href="https://github.com/jaween">github.com/jaween</a></td>
        </tr>
        <tr>
          <td><img src="resources/images/resume_icon.png"></td>
          <td><a href="resources/files/resume.pdf">Resume</a></td>
        </tr>
      </table>
      <span class="updated">Last update was in January 2017</span>
    </div>
  </div>
  `
})

export class NavigationComponent {
}
