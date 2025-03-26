import { Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals, not } from '@serenity-js/assertions';
import { Actor, actorInTheSpotlight, Duration, Wait } from '@serenity-js/core';
import {
    Enter,
    isVisible,
    Navigate,
    Page,
    Scroll,
    Value,
} from '@serenity-js/web';
import {
    contentItems,
    contentTitle,
    loading,
    paginationSection,
    searchInput,
    searchResultItems,
} from '../../test/content';

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */

Given(
    '{actor} open the Akulaku Finance website homepage',
    async (actor: Actor) => {
        await actor.attemptsTo(Navigate.to('/'));
    },
);

When('{actor} navigate to the Kegiatan page', async (actor: Actor) => {
    await actor.attemptsTo(Navigate.to('/kegiatan'));
});

Given('the homepage is successfully displayed', async () => {
    await actorInTheSpotlight().attemptsTo(
        Ensure.that(
            Page.current().title(),
            equals('Akulaku Finance Indonesia'),
        ),
    );
});

Then(
    '{actor} should see the Kegiatan page is displayed',
    async (actor: Actor) => {
        await actorInTheSpotlight().attemptsTo(
            Ensure.that(
                contentTitle('Literasi & Inklusi Keuangan'),
                isVisible(),
            ),
        );
    },
);

Then(
    '{actor} should see a list of {int} activity thumbnails on the Kegiatan page',
    async (actor: Actor, totalContent: number) => {
        await actor.attemptsTo(
            Wait.upTo(Duration.ofSeconds(5)).until(
                contentItems.count(),
                equals(totalContent),
            ),
            Ensure.that(contentItems.count(), equals(totalContent)),
        );
    },
);

Then(
    '{actor} should see pagination controls at the bottom of the list',
    async (actor: Actor) => {
        await actor.attemptsTo(
            Scroll.to(paginationSection),
            Ensure.that(paginationSection, isVisible()),
        );
    },
);

When(
    '{actor} enter {string} into the search field',
    async (actor: Actor, search: string) => {
        await actor.attemptsTo(Enter.theValue(search).into(searchInput));
        Ensure.that(Value.of(searchInput), equals(search));
    },
);

Then(
    '{actor} should see {int} suggested results appear in the search dropdown',
    async (actor: Actor, amount: number) => {
        await actor.attemptsTo(
            Wait.upTo(Duration.ofSeconds(3)).until(loading, not(isVisible())),
            Ensure.that(searchResultItems.count(), equals(amount)),
        );
    },
);
