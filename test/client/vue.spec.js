const expect = require('expect');
const path = require('path');
const { skipPrettierHelpers: helpers } = require('../utils/utils');
const { OAUTH2 } = require('../../jdl/jhipster/authentication-types');
const { VUE } = require('../../jdl/jhipster/client-framework-types');

const commonOptions = { clientFramework: VUE };

describe('JHipster vue generator', () => {
  describe('microfrontend', () => {
    let runResult;
    before(async () => {
      runResult = await helpers
        .create(path.join(__dirname, '../../generators/client'))
        .withOptions({
          skipInstall: true,
          auth: OAUTH2,
          microfrontend: true,
          enableTranslation: true,
          nativeLanguage: 'en',
          languages: ['fr', 'en'],
          ...commonOptions,
        })
        .run();
    });
    it('should match generated files snapshot', () => {
      expect(runResult.getStateSnapshot()).toMatchSnapshot();
    });
  });
});
