import React, { useState, useContext } from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Pressable, KeyboardAvoidingView, Button, Modal, Alert } from "react-native";

import pizzalogo from "../../images/PIZZARIA.png";
import pizcalab from "../../images/pizzacalab.jpg";
import pizmarg from "../../images/pizzamarg.jpg";
import pizfran from "../../images/pizzafranbacon.jpg";
import pizqueijo from "../../images/pizzaqueijo.jpg";
import pizmoda from "../../images/pizzamoda.jpg";

import { MenuContext } from "../context/menuContext";
import { styles } from "./MenuStyle";

export function Menu() {
  const [saboresSelecionados, setSaboresSelecionados] = useState<string[]>([]);
  const [mensagemFinal, setMensagemFinal] = useState("");
  const [tamanhoSelect, setTamanhoSelect] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const { visible, setVisible } = useContext(MenuContext);

  const sabores = [
    { nome: "calabresa", Image: pizcalab },
    { nome: "franbacon", Image: pizfran },
    { nome: "marguerita", Image: pizmarg },
    { nome: "moda-da-casa", Image: pizmoda },
    { nome: "4-queijos", Image: pizqueijo },
  ];

  const tamanho = [{ title: "pequeno" }, { title: "media" }, { title: "grande" }, { title: "tamanho-familia" }];

  //verifica se possui o sabor, caso nao ele adiciona se sim ele remove, se for diferente adiciona outro.
  const handleSabor = (sabor: string) => {
    if (saboresSelecionados.includes(sabor)) {
      setSaboresSelecionados(saboresSelecionados.filter((item) => item !== sabor));
    } else {
      setSaboresSelecionados([...saboresSelecionados, sabor]);
    }
  };

  function substituirPalavras(frase: string, substituicoes: { [palavra: string]: string }): string {
    // Usa uma expressão regular para encontrar as palavras no objeto substituições
    const regex = new RegExp(`\\b(${Object.keys(substituicoes).join("|")})\\b`, "gi");

    // Substitui as palavras encontradas com seus respectivos valores
    return frase.replace(regex, (match) => substituicoes[match.toLowerCase()] || match);
  }

  //valores
  const substituicoes = {
    calabresa: "agressão verbal",
    franbacon: "roubo",
    marguerita: "dano material",
    "moda-da-casa": "agressão fisica",
    "4-queijos": "agressão sexual",
    pequeno: "baixo impacto",
    media: "impacto moderado",
    grande: "alto impacto",
    "tamanho-familia": "impacto crítico",
  };

  //funcao para formar a frase completa para o envio
  function handlePedido() {
    const frase = `
     -Motivo: ${saboresSelecionados}
     -Gravidade: ${tamanhoSelect}`;

    const resultado = substituirPalavras(frase, substituicoes);

    const mensagemEnviada = `
     -Nome: ${nome}
     -Endereço: ${endereco}
     -Telefone: ${telefone}
            -Denuncia: ${resultado}
     -Descrição: ${description}`;

    setMensagemFinal(mensagemEnviada);
    // setModalVisible(true);
    console.log(mensagemFinal);
  }

  const showAlert = () =>
    Alert.alert(
      "Concluir Pedido ?",
      "Caso esteja em duvida pode revisar o pedido",
      [
        {
          text: "Revisar",
          onPress: () => setModalVisible(true),
        },
        {
          text: "Concluir",
          onPress: () => Alert.alert(`PEDIDO CONCLUIDO!! \nenviaremos o mais rapido possivel`),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => Alert.alert("Estamos sempre aqui"),
      }
    );

  return (
    <ScrollView style={{ backgroundColor: "white", display: visible ? "none" : "flex" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.logo} onPress={() => setVisible(!visible)}>
            <Image source={pizzalogo} style={styles.img} />
          </TouchableOpacity>
          <View style={styles.formu}>
            <Text style={{ color: "#a8792d", fontWeight: "bold", textAlign: "center", fontSize: 20 }}>Endereço</Text>
            <TextInput style={styles.formuText} placeholder="Nome completo" onChangeText={setNome}></TextInput>
            <TextInput style={styles.formuText} placeholder="Telefone" onChangeText={setTelefone}></TextInput>
            <TextInput style={styles.formuText} placeholder="Endereço:" onChangeText={setEndereco}></TextInput>
          </View>
        </View>

        <View style={styles.saborContainer}>
          <Text style={styles.text}>Escolha um sabor</Text>
          <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal={true}>
              {sabores.map((item, index) => (
                <TouchableOpacity style={{ alignItems: "center" }} key={index} onPress={() => handleSabor(item.nome)}>
                  <Image style={styles.pizza} source={item.Image} />
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.nome}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              <Text style={{ color: "#a8792d" }}>Sabores Selecionados:</Text> {"\n"}
              {saboresSelecionados.join(", ") || "Nenhum"}
            </Text>
          </View>
        </View>
        <View style={styles.tamContainer}>
          <Text style={styles.text}>Escolha um tamanho</Text>
          <View style={{ flexDirection: "row", gap: 15 }}>
            {tamanho.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => setTamanhoSelect(item.title)}>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text>
            <Text style={{ color: "#a8792d", fontWeight: "bold", textAlign: "center" }}>Tamanho selecionado:</Text>
            {"\n"}
            {tamanhoSelect}
          </Text>
        </View>
        <KeyboardAvoidingView style={styles.descContainer}>
          <Text style={styles.text}>Se possível, deixe uma descrição</Text>
          <TextInput style={styles.desc} multiline numberOfLines={4} onChangeText={(text) => setDescription(text)} value={description} />
          <Pressable>
            <Text style={styles.btnPedido} onPress={showAlert} onPressOut={handlePedido}>
              Fazer Pedido
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Fecha a modal ao clicar fora ou apertar "Voltar"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Resumo do Pedido:</Text>
              <Text>{mensagemFinal}</Text>
              <Button title="Fechar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
