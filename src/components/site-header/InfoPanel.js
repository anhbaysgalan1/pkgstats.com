import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'components/base/Link';

const Panel = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.show ? '0%' : '110%'};
  width: 100%;
  height: 100%;
  z-index: 2147483647;

  display: flex;
  flex-direction: column;
  justify-content: stretch;

  font-size: 1.3rem;
  color: #000;
  background-color: #fff;
  transition: left 0.3s ease-in-out;

  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 6rem;

    h2 {
      margin: 0;
    }
  }

  h2,
  h3 {
    font-size: 1.8rem;
  }

  p {
    line-height: 1.8;
  }

  a {
    color: #000;
  }

  img {
    max-height: 3rem;
    max-width: 100%;
  }

  section {
    margin-top: 1.8rem;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
      }

      li + li {
        border-top: 1px solid #eee;
      }

      h4,
      p {
        margin: 0;
        line-height: 1.5;
      }

      h4 {
        font-size: 1.3rem;
      }

      p {
        flex-basis: 70%;
        text-align: right;
      }
    }
  }

  section + section {
    border-top: 0.2rem solid #000;
    margin-top: 3rem;
  }

  @media all and (min-width: 768px) {
    width: 33.3%;
    left: ${props => props.show ? '66.6%' : '110%'};
  }

  @media all and (min-width: 1024px) {
    width: 25%;
    left: ${props => props.show ? '75%' : '110%'};
  }

  @media all and (min-width: 1919px) {
    width: 20%;
    left: ${props => props.show ? '80%' : '110%'};
  }
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 6rem 2rem 2rem;
`;

const CloseButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  margin: 0;
  padding: 0;

  position: absolute;
  top: 1.3rem;
  right: 1.3rem;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 50%;
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #000;
    width: 0.2rem;
    height: 2rem;
  }

  &::before {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }

  &::after {
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }
`;

class InfoPanel extends Component {
  render() {
    const {
      show,
      onDismiss,
    } = this.props;

    return (
      <Panel show={show}>
        <CloseButton onClick={onDismiss} title="Close" />
        <ScrollArea>
          <section>
            <p>npm package discovery and stats viewer.</p>
          </section>
          <section>
            <h3>Discover Tips</h3>
            <ul>
              <li>
                <h4>General search</h4>
                <p><code>[free text search, go nuts!]</code></p>
              </li>
              <li>
                <h4>Package details</h4>
                <p><code>pkg:[package-name]</code></p>
              </li>
              <li>
                <h4>User packages</h4>
                <p><code>@[username]</code></p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Sponsor</h3>
            <a href="https://optimizetoolset.com?ref=pkgstats.com" target="_blank" rel="noopener noreferrer">
              <img src="/static/images/optimize-toolset.png" alt="Optimize Toolset" loading="lazy" />
            </a>
            <p>
              I’ve always been into building performant and accessible sites, but
              lately I’ve been taking it extremely seriously. So much so that
              I’ve been building a tool to help me optimize and monitor the sites
              that I build to make sure that I’m making an attempt
              to offer the best experience to those who visit them. If you’re into
              performant, accessible and SEO friendly sites, you might like it too!
              You can check it out at <a href="https://optimizetoolset.com?ref=pkgstats.com" target="_blank" rel="noopener noreferrer">Optimize Toolset</a>.
            </p>
          </section>
          <section>
            <h3>About</h3>
            <p>
              Hi, 👋, I’m <Link route="/@ryanhefner"><a>Ryan Hefner</a></Link>&nbsp;
              and I built this site for me, and you! The goal of this site was to
              provide an easy way for me to check the stats on my npm packages,
              both for prioritizing issues and updates, and to give me a little
              kick in the pants to keep up on stuff.
            </p>
            <p>
              As I was building it, I realized that I was actually using the tool
              to build the tool, and figured I might as well put this out there
              and hopefully others will find it to be a fast and useful way to
              search and browse npm packages as I have.
            </p>
            <p>
              If you’re interested in other things I’m working on, follow me on
              Twitter or check out the open source projects I’ve been publishing
              on GitHub.
            </p>
            <p>
              I am also working on a Twitter bot for this site to tweet the most
              popular, newest, random packages from <a href="https://npmjs.com" target="_blank" rel="noopener noreferrer">npm</a>.
              Please follow that account now and it will start sending out
              packages soon–ish.
            </p>
            <ul>
              <li>
                <h4>Twitter</h4>
                <p><code><a href="https://twitter.com/pkgstats" target="_blank" rel="noopener noreferrer">@PkgStats</a></code></p>
              </li>
              <li>
                <h4>GitHub</h4>
                <p><code><a href="https://github.com/pkgstats" target="_blank" rel="noopener noreferrer">pkgstats</a></code></p>
              </li>
              <li>
                <h4>Twitter</h4>
                <p><code><a href="https://twitter.com/ryanhefner" target="_blank" rel="noopener noreferrer">@ryanhefner</a></code></p>
              </li>
              <li>
                <h4>GitHub</h4>
                <p><code><a href="https://github.com/ryanhefner" target="_blank" rel="noopener noreferrer">ryanhefner</a></code></p>
              </li>
              <li>
                <h4>Site</h4>
                <p><code><a href="https://www.ryanhefner.com" target="_blank" rel="noopener noreferrer">ryanhefner.com</a></code></p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Open Software &amp; Tools</h3>
            <p>
              This site wouldn’t be possible without the immense generosity and
              tireless efforts from the people who make contributions to the world
              and share their work via open source initiatives. Thank you 🙏
            </p>
            <ul>
              <li>
                <h4>Framework</h4>
                <p>
                  <code>
                    <Link route="/pkg:react"><a>react</a></Link>
                    &nbsp;/ <Link route="/pkg:react-dom"><a>react-dom</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Server</h4>
                <p>
                  <code>
                    <Link route="/pkg:next"><a>next</a></Link>
                    &nbsp;/ <Link route="/pkg:express"><a>express</a></Link>
                    &nbsp;/ <Link route="/pkg:next-routes"><a>next-routes</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Data Store</h4>
                <p>
                  <code>
                    <Link route="/pkg:redux"><a>redux</a></Link>
                    &nbsp;/ <Link route="/pkg:react-redux"><a>react-redux</a></Link>
                    &nbsp;/ <Link route="/pkg:next-redux-wrapper"><a>next-redux-wrapper</a></Link>
                    &nbsp;/ <Link route="/pkg:redux-thunk"><a>redux-thunk</a></Link>
                    &nbsp;/ <Link route="/pkg:redux-logger"><a>redux-logger</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Caching</h4>
                <p>
                  <code>
                    <Link route="/pkg:lru-cache"><a>lru-cache</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>CSS / Styling</h4>
                <p>
                  <code>
                    <Link route="/pkg:next-page-transitions"><a>next-page-transitions</a></Link>
                    &nbsp;/ <Link route="/pkg:styled-components"><a>styled-components</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Typeface</h4>
                <p>
                  <code>
                    <Link route="/pkg:@ibm/plex"><a>@ibm/plex</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Avatars</h4>
                <p>
                  <code>
                    <Link route="/pkg:gravatar"><a>gravatar</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Data Viz</h4>
                <p>
                  <code>
                    <Link route="/pkg:chart.js"><a>chart.js</a></Link>
                    &nbsp;/ <Link route="/pkg:react-sparklines"><a>react-sparklines</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Date formatting</h4>
                <p>
                  <code>
                    <Link route="/pkg:dayjs"><a>dayjs</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Infinite scrolling</h4>
                <p>
                  <code>
                    <Link route="/pkg:react-scroll-trigger"><a>react-scroll-trigger</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Markdown rendering</h4>
                <p>
                  <code>
                    <Link route="/pkg:react-markdown"><a>react-markdown</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Repository url parsing</h4>
                <p>
                  <code>
                    <Link route="/pkg:hosted-git-info"><a>hosted-git-info</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>User data</h4>
                <p>
                  <code>
                    <Link route="/pkg:npm-user"><a>npm-user</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Compiling</h4>
                <p>
                  <code>
                    <Link route="/pkg:babel-plugin-module-resolver"><a>babel-plugin-module-resolver</a></Link>
                    &nbsp;/ <Link route="/pkg:babel-plugin-styled-components"><a>babel-plugin-styled-components</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Types</h4>
                <p>
                  <code>
                    <Link route="/pkg:prop-types"><a>prop-types</a></Link>
                  </code>
                </p>
              </li>
              <li>
                <h4>Odds &amp; Ends</h4>
                <p>
                  <code>
                    <Link route="/pkg:es6-promise"><a>es6-promise</a></Link>
                    &nbsp;/ <Link route="/pkg:isomorphic-fetch"><a>isomorphic-fetch</a></Link>
                  </code>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <p>{`© ${(new Date()).getFullYear()} – Pkg Stats / Ryan Hefner`}</p>
          </section>
        </ScrollArea>
      </Panel>
    );
  }
}

InfoPanel.propTypes = {
  show: PropTypes.bool,
  onDismiss: PropTypes.func,
};

InfoPanel.defaultProps = {
  show: false,
  onDismiss: () => {},
};

export default InfoPanel;
