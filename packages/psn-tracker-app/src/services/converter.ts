/**
 * Copyright 2020 Oleg Shulyakov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const arrayToMap = (array: PreviewGamesMapItem[] | undefined) => {
    const map = new Map<string, any>();
    if (!array) {
        return map;
    }

    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        map.set(e.key, e.game);
    }
    return map;
};

export const mapToArray = (map: Map<string, any> | undefined) => {
    const array: any[] = [];
    if (!map) {
        return array;
    }

    for (const [key, game] of map.entries()) {
        const e = { key: key, game: game };
        array.push(e);
    }
    return array;
};
