/*
"getObjectById" 메소드를 작성합니다.

TREE_DATA 라는 JSON 형태의 데이터가 있습니다.
getObjectById 함수는, TREE_DATA.items와 같이, 객체로 구성된 배열 안에서, 인자로 넘기는 특정 id값을 가지고 있는 객체를 찾아 리턴합니다.
이 때 객체는 children이라는 키 값에 자식 노드를 가질 수 있으며, 부모 뿐만이 아닌, 자식 노드 중에서도 id값을 가진 객체가 있는지를 찾아내야 합니다.

let output = getObjectById(TREE_DATA.items, '1'));
console.log(output); // --> { "id": "1", "name": "johnny" }
*/

const TREE_DATA = {
  items: [
    {
      id: '1',
      name: 'johnny',
    },
    {
      id: '2',
      name: 'ingi',
      children: [
        {
          id: '3',
          name: 'johnson',
        },
        {
          id: '4',
          name: 'katy',
        },
        {
          id: '5',
          name: 'steve',
          children: [
            {
              id: '6',
              name: 'lisa',
            },
            {
              id: '7',
              name: 'penny',
              children: [
                {
                  id: '8',
                  name: 'john',
                },
                {
                  id: '9',
                  name: 'hoyong',
                },
              ],
            },
            {
              id: '10',
            },
          ],
        },
        {
          id: '11',
        },
        {
          id: '12',
        },
      ],
    },
    {
      id: '13',
    },
    {
      id: '14',
    },
  ],
};
// 객체에서 id를 찾는 문제
// 배열 안에 앨리먼트를 돌린다.
// 배열의 앨리먼트에 id에 지정 받은 id 값이 있다면 그 객체(el) 리턴해준다.
// 만약 배열의 el에 children키가 있으면
// 다시 함수를 불러 그 앨리먼트 안에 배열에서 id를 찾아준다.

// eslint-disable-next-line consistent-return
function getObjectById(json, id) {
  // eslint-disable-next-line no-restricted-syntax
  for (const el of json) {
    if (el.id === id) {
      return el;
    }
    if (el.children) {
      return getObjectById(el.children, id);
    }
  }
}

module.exports = {
  getObjectById,
  TREE_DATA,
};
